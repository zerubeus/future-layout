module.exports = {
  id: 'layout',
  model: {
    profiles: [
      {
        id: 'doctor',
        displayLabel: 'MSG_DOCTOR',
        views: [
          {
            id: 'innova',
            displayLabel: 'MSG_INNOVA',
            visible: true,
            tabs: [
              {
                id: 'record',
                displayLabel: 'MSG_RECORD',
                visible: true,
                type: 'standard',
              },
              {
                id: 'fluoro',
                displayLabel: 'MSG_FLUORO',
                visible: true,
                type: 'standard',
              },
              {
                id: 'review',
                displayLabel: 'MSG_REVIEW',
                visible: true,
                type: 'standard',
              },
              {
                id: 'dose',
                displayLabel: 'MSG_DOSE',
                visible: true,
                type: 'standard',
              },
              {
                id: 'image-sizing',
                displayLabel: 'MSG_IMAGE_SIZING',
                visible: true,
                type: 'standard',
              },
            ],
          },
          {
            id: 'aw',
            displayLabel: 'MSG_AW',
            visible: true,
            tabs: [
              {
                id: 'applications',
                displayLabel: 'MSG_APPLICATIONS',
                visible: true,
                type: 'standard',
              },
              {
                id: '3d-vision-intervention',
                displayLabel: 'MSG_3D_INTER',
                visible: true,
                type: 'standard',
              },
              {
                id: '3d-vision-registration',
                displayLabel: 'MSG_3DVISION_2_INTERVENTION',
                visible: true,
                type: 'standard',
              },
              {
                id: '3d-vision-stereo3d',
                displayLabel: 'MSG_3DVISION_2_STEREO3D',
                visible: true,
                type: 'standard',
              },
              {
                id: 'test',
                displayLabel: 'MSG_TEST',
                visible: true,
                type: 'standard',
              },
              {
                id: 'ep-vision-intervention',
                displayLabel: 'MSG_EPVISION_2_INTERVENTION',
                visible: false,
                type: 'standard',
              },
              {
                id: 'ep-vision-registration',
                displayLabel: 'MSG_EPVISION_2_REGISTRATION',
                visible: false,
                type: 'standard',
              },
              {
                id: 'evar-vision-intervention',
                displayLabel: 'MSG_EVARVISION_2_INTERVENTION',
                visible: false,
                type: 'standard',
              },
              {
                id: 'evar-vision-registration',
                displayLabel: 'MSG_EVARVISION_2_REGISTRATION',
                visible: false,
                type: 'standard',
              },
              {
                id: 'evar-vision-stereo3D',
                displayLabel: 'MSG_EVARVISION_2_STEREO3D',
                visible: false,
                type: 'standard',
              },
              {
                id: 'heart-vision-intervention',
                displayLabel: 'MSG_HEARTVISION_2_INTERVENTION',
                visible: false,
                type: 'standard',
              },
              {
                id: 'heart-vision-registration',
                displayLabel: 'MSG_HEARTVISION_2_REGISTRATION',
                visible: false,
                type: 'standard',
              },
              {
                id: 'track-vision-intervention',
                displayLabel: 'MSG_TRACKVISION_2_INTERVENTION',
                visible: false,
                type: 'standard',
              },
              {
                id: 'track-vision-registration',
                displayLabel: 'MSG_TRACKVISION_2_REGISTRATION',
                visible: false,
                type: 'standard',
              },
              {
                id: 'track-vision-stereo3D',
                displayLabel: 'MSG_TRACKVISION_2_STEREO3D',
                visible: false,
                type: 'standard',
              },
            ],
          },
          {
            id: 'ecg',
            displayLabel: 'MSG_ECG',
            visible: false,
            tabs: [
              {
                id: 'image-sizing',
                displayLabel: 'MSG_IMAGE_SIZING',
                visible: true,
                type: 'standard',
              },
            ],
          },
        ],
      },
      {
        id: 'nurse',
        displayLabel: 'MSG_NURSE',
        views: [
          {
            id: 'home',
            displayLabel: 'MSG_HOME',
            visible: true,
            tabs: [
              {
                id: 'ic',
                displayLabel: 'MSG_IC',
                visible: true,
                type: 'standard',
              },
              {
                id: 'ir',
                displayLabel: 'MSG_IR',
                visible: true,
                type: 'standard',
              },
            ],
          },
          {
            id: 'acquisition',
            displayLabel: 'MSG_ACQUISITION',
            visible: true,
            tabs: [
              {
                id: 'protocol',
                displayLabel: 'MSG_PROTOCOL',
                visible: true,
                type: 'standard',
              },
              {
                id: 'image-sizing',
                displayLabel: 'MSG_IMAGE_SIZING',
                visible: true,
                type: 'standard',
              },
              {
                id: 'pixel-shift',
                displayLabel: 'MSG_PIXEL_SHIFT',
                visible: false,
                type: 'standard',
              },
            ],
          },
          {
            id: 'review',
            displayLabel: 'MSG_REVIEW',
            visible: true,
            tabs: [
              {
                id: 'irb',
                displayLabel: 'MSG_IRB',
                visible: true,
                type: 'standard',
              }, {
                id: 'sequences',
                displayLabel: 'MSG_SEQUENCES',
                visible: true,
                type: 'standard',
              }, {
                id: 'photos',
                displayLabel: 'MSG_PHOTOS',
                visible: true,
                type: 'standard',
              },
            ],
          },
          {
            id: 'awtp',
            displayLabel: 'MSG_AW',
            visible: true,
            tabs: [
              {
                id: 'awtp',
                displayLabel: 'MSG_AWTP',
                visible: true,
                url: 'http://192.168.1.8:9090/awtp/',
                type: 'embed',
              },
            ],
          },
        ],
      },
    ],
  },
};
