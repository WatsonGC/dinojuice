<template>
  <video
    ref="video"
    :width="width"
    :height="height"
    :src="source"
    :autoplay="autoplay"
    :playsinline="playsinline"
  />
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VueWebCam',
  props: {
    width: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: [Number, String],
      default: 500
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    screenshotFormat: {
      type: String,
      default: 'image/jpeg'
    },
    selectFirstDevice: {
      type: Boolean,
      default: true
    },
    playsinline: {
      type: Boolean,
      default: true
    },
    resolution: {
      type: Object,
      default: null,
      validator: value => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return value.height && value.width;
      }
    }
  },
  data () {
    return {
      source: null,
      canvas: null,
      camerasListEmitted: false,
      cameras: [],
      deviceId: null,
    };
  },
  watch: {
    deviceId: function (id) {
      this.changeCamera(id);
    }
  },
  mounted () {
  console.log('am i even mounted?');
    this.setupMedia();
  },
  beforeUnmount () {
    this.stop();
  },
  methods: {
    /**
     * get user media
     */
    legacyGetUserMediaSupport () {
      return constraints => {
        // First get ahold of the legacy getUserMedia, if present
        const getUserMedia =
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia ||
          navigator.oGetUserMedia;
        // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface
        if (!getUserMedia) {
          return Promise.reject(
            new Error('getUserMedia is not implemented in this browser')
          );
        }
        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    },
    /**
     * setup media
     */
    setupMedia () {
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = this.legacyGetUserMediaSupport();
      }

      console.log('am I setup?');

      this.testMediaAccess();
    },
    /**
     * load available cameras
     */
    loadCameras () {
      navigator.mediaDevices
        .enumerateDevices()
        .then(deviceInfos => {
          for (let i = 0; i !== deviceInfos.length; ++i) {
            const deviceInfo = deviceInfos[i];
            if (deviceInfo.kind === 'videoinput') {
              this.cameras.push(deviceInfo);
            }
          }
        })
        .then(() => {
          if (!this.camerasListEmitted) {
            if (this.selectFirstDevice && this.cameras.length > 0) {
            console.log(this.cameras[0].deviceId);
              this.deviceId = this.cameras[0].deviceId;
            }
            console.log('emitting cameras');
            this.$emit('cameras', this.cameras);
            this.camerasListEmitted = true;
          }
        })
        .catch(error => {this.$emit('notsupported', error); console.log(error)});
    },
    /**
     * change to a different camera stream, like front and back camera on phones
     */
    changeCamera (deviceId) {
      this.stop();
      this.$emit('camera-change', deviceId);
      this.loadCamera(deviceId);
    },
    /**
     * load the stream to the
     */
    loadSrcStream (stream) {
      if ('srcObject' in this.$refs.video) {
        // new browsers api
        this.$refs.video.srcObject = stream;
      } else {
        // old broswers
        this.source = window.HTMLMediaElement.srcObject(stream);
      }
      // Emit video start/live event
      this.$refs.video.onloadedmetadata = () => {
        this.$emit('video-live', stream);
      };
      this.$emit('started', stream);
    },
    /**
     * stop the selected streamed video to change camera
     */
    stopStreamedVideo (videoElem) {
      const stream = videoElem.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => {
        // stops the video track
        track.stop();
        this.$emit('stopped', stream);
        this.$refs.video.srcObject = null;
        this.source = null;
      });
    },
    // stop the video
    stop () {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.stopStreamedVideo(this.$refs.video);
      }
    },
    // start the video
    start () {
      if (this.deviceId) {
        this.loadCamera(this.deviceId);
      }
    },
    // pause the video
    pause () {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.$refs.video.pause();
      }
    },
    // resume the video
    resume () {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.$refs.video.play();
      }
    },
    /**
     * test access
     */
    testMediaAccess () {
      const constraints = { video: true };
      if (this.resolution) {
        constraints.video = {};
        constraints.video.height = this.resolution.height;
        constraints.video.width = this.resolution.width;
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          // Make sure to stop this MediaStream
          console.log('well i am here maybe?');
          const tracks = stream.getTracks();
          tracks.forEach(track => {
            track.stop();
          });
          this.loadCameras();
        })
        .catch(error => {this.$emit('error', error); console.log(error);});
    },
    /**
     * load the camera passed as index!
     */
    loadCamera (device) {
      const constraints = { video: { deviceId: { exact: device } } };
      if (this.resolution) {
        constraints.video.height = this.resolution.height;
        constraints.video.width = this.resolution.width;
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => { this.loadSrcStream(stream)
          console.log('I got here');
        })
        .catch(error => this.$emit('error', error));
    },
    /**
     * capture screenshot
     */
    capture () {
      return this.getCanvas().toDataURL(this.screenshotFormat);
    },
    /**
     * get canvas
     */
    getCanvas () {
      const video = this.$refs.video;
      if (!this.ctx) {
        const canvas = document.createElement('canvas');
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
      }
      const { ctx, canvas } = this;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      return canvas;
    }
  }
});
</script>
