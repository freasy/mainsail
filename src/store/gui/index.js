import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export function getDefaultState() {
	return {
		general: {
			printername: "",
			language: "en",
			displayCancelPrint: false,
			displayZOffsetStandby: false,
		},
		dashboard: {
			boolWebcam: false,
			boolTempchart: true,
			boolConsole: true,
			hiddenMacros: [],
			hiddenTempChart: [],
			control: {
				feedrateXY: 100,
				stepsXY: [ 100, 10, 1 ],
				feedrateZ: 25,
				stepsZ: [ 25, 1, 0.1 ],
				stepsAll: [0.1, 1, 10, 25, 50, 100],
				selectedCrossStep: null,
				reverseX: false,
				reverseY: false,
				reverseZ: false,
				useCross: false
			},
			extruder: {
				feedamount: 25,
				feedamounts: [ 50, 25, 10, 5, 1 ],
				feedrate: 5,
				feedrates: [ 60, 30, 15, 5, 1 ],
			}
		},
		webcam: {
			selectedCam: "",
			bool: false,
			configs: [{
				name: 'Default',
				icon: 'mdi-webcam',
				service: "mjpegstreamer-adaptive",
				targetFps: 15,
				url: "/webcam/?action=stream",
				flipX: false,
				flipY: false,
			}],
		},
		tempchart: {
			intervalChartUpdate: 1000,
			intervalDatasetUpdate: 1000,
			autoscale: false,
			datasetSettings: {

			},
		},
		console: {
			hideWaitTemperatures: true,
			customFilters: [],
		},
		gcodefiles: {
			countPerPage: 10,
			sortBy: 'modified',
			sortDesc: true,
			showHiddenFiles: false,
			showPrintedFiles: true,
			hideMetadataColums: []
		},
		history: {
			countPerPage: 10,
			toggleChartCol3: 'filament_usage',
			hideColums: [
				'size',
				'modified',
				'end_time',
				'total_duration',
				'filament_total',
				'first_layer_extr_temp',
				'first_layer_bed_temp',
				'first_layer_height',
				'layer_height',
				'object_height',
			]
		},
		settings: {
			configfiles: {
				countPerPage: 10,
				sortBy: 'filename',
				sortDesc: false,
				showHiddenFiles: false,
			}
		},
		editor: {
			minimap: false
		},
		//moonraker DB api dont accept camel case key names
		remote_printers: [],
		presets: [],
		//moonraker DB api dont accept camel case key names
		cooldown_gcode: "TURN_OFF_HEATERS"
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
