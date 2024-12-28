  Nexus.context = Tone.context;

  mobileStart = document.getElementById('mobileStart')
  mobileStart.addEventListener('touchend',function() {
    var osc = Nexus.context.createOscillator()
    osc.connect(Nexus.context.destination)
    osc.start(0)
    osc.stop(0.1)
    Nexus.clock.start();
  })

  Nexus.colors.accent = "#2cc";



  drone = new Nexus.Rack('#drone');

  droneSynth = {
    fm: new Tone.FMOscillator(100, "sawtooth", "sawtooth").start(),
    fm2: new Tone.FMOscillator(112.5, "sawtooth", "sawtooth").start(),
    vol: new Tone.Volume(-Infinity),
    pan: new Tone.Panner(0),
    filter: new Tone.Filter(100, "bandpass"),
    verb: new Tone.Freeverb(),
    compressor: new Tone.Compressor(-30, 10)
  }

  droneSynth.fm.connect( droneSynth.filter )
  droneSynth.fm2.connect( droneSynth.filter );
  droneSynth.filter.chain( droneSynth.compressor, droneSynth.vol, droneSynth.pan, droneSynth.verb, Tone.Master)


  droneSynth.fm.harmonicity.value = 4
  droneSynth.fm2.harmonicity.value = 4


  drone.power.on('change',function(v) {
    if (v) {
      droneSynth.vol.volume.rampTo(-20,1)
    } else {
      droneSynth.vol.volume.rampTo(-Infinity,1)
    }
  })

  drone.timbre.min = 10
  drone.timbre.max = 20
  drone.timbre.on('change',function(v) {
    droneSynth.fm.modulationIndex.rampTo(v,0.1)
    droneSynth.fm2.modulationIndex.rampTo(v,0.1)
  })
  drone.timbre.value = 0


  drone.pan.on('change',function(v) {
    droneSynth.pan.pan.value = v.value;
  })



  drone.filter.minX = 0
  drone.filter.maxX = 1400
  drone.filter.minY = 0
  drone.filter.maxY = 10

  drone.filter.on('change',function(v) {
    droneSynth.filter.frequency.value = v.x;
    droneSynth.filter.Q.value = v.y;
  })



    droneSynth.verb.wet.value = 0.2


    drone.spectrogram.connect(Tone.Master);
    drone.spectrogram.colorize("fill","#fff")
    drone.spectrogram.colorize("accent","#2cc")