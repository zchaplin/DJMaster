/** @format */

document.addEventListener("DOMContentLoaded", function () {
  // Create play/pause button
  const playButton = document.createElement("button");
  playButton.textContent = "Play";
  document.body.appendChild(playButton);

  // Create sliders for X position, song position, and filters
  const sliders = {
    xPos: {
      min: "-10",
      max: "10",
      value: "0",
      step: "0.1",
      label: "X Position:",
    },
    songPos: {
      min: "0",
      max: "100",
      value: "0",
      step: "1",
      label: "Song Position:",
    },
    lowPass: {
      min: "20",
      max: "6000",
      value: "20000",
      step: "1",
      label: "Low-pass Cutoff:",
    },
    highPass: {
      min: "20",
      max: "6000",
      value: "20",
      step: "1",
      label: "High-pass Cutoff:",
    },
  };

  Object.keys(sliders).forEach((id) => {
    const settings = sliders[id];
    const container = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = settings.label;

    const slider = document.createElement("input");
    slider.type = "range";
    slider.id = id;
    slider.min = settings.min;
    slider.max = settings.max;
    slider.value = settings.value;
    slider.step = settings.step;

    container.appendChild(label);
    container.appendChild(slider);
    document.body.appendChild(container);

    if (id === "songPos") {
      slider.addEventListener("input", function () {
        const seek = (slider.value / 100) * sound.duration();
        sound.seek(seek);
      });
    } else if (id === "lowPass" || id === "highPass") {
      slider.addEventListener("input", function () {
        updateFilters(id, parseFloat(slider.value));
      });
    } else {
      slider.addEventListener("input", handlePositionChange);
    }
  });

  // Initialize Howler sound with filters and song position slider
  const sound = new Howl({
    src: ["MissDaisy.mp3"],
    loop: true,
    volume: 0.5,
    onplay: function () {
      requestAnimationFrame(updateProgress);
    },
    onseek: updateProgress,
    onend: function () {
      playButton.textContent = "Play";
      document.getElementById("songPos").value = 0;
    },
  });

  // Filters initialization
  const lowPass = Howler.ctx.createBiquadFilter();
  lowPass.type = "lowpass";
  lowPass.frequency.value = 20000; // Start without filtering

  const highPass = Howler.ctx.createBiquadFilter();
  highPass.type = "highpass";
  highPass.frequency.value = 20; // Start without filtering

  // Connect Howler sound output to filters, then to destination
  sound._sounds[0]._node.disconnect();
  sound._sounds[0]._node.connect(lowPass);
  lowPass.connect(highPass);
  highPass.connect(Howler.ctx.destination);

  // Function to update filter settings
  function updateFilters(filterId, value) {
    if (filterId === "lowPass") {
      lowPass.frequency.value = value;
    } else if (filterId === "highPass") {
      highPass.frequency.value = value;
    }
  }

  // Play/Pause toggle
  playButton.addEventListener("click", function () {
    if (sound.playing()) {
      sound.pause();
      playButton.textContent = "Play";
    } else {
      sound.play();
      playButton.textContent = "Pause";
    }
  });

  // Update song position slider as the song plays
  function updateProgress() {
    const songPosSlider = document.getElementById("songPos");
    songPosSlider.value = (sound.seek() / sound.duration()) * 100;
    if (sound.playing()) {
      requestAnimationFrame(updateProgress);
    }
  }

  // Function to update sound position
  function handlePositionChange() {
    const x = parseFloat(document.getElementById("xPos").value);
    sound.pos(x, 0, 0); // Updated to use only X position for 3D sound
  }
  // Create play/pause button
  const playButton1 = document.createElement("button");
  playButton1.textContent = "Play";
  document.body.appendChild(playButton1);

  // Create sliders for X position, song position, and filters
  const sliders1 = {
    xPos1: {
      min: "-10",
      max: "10",
      value: "0",
      step: "0.1",
      label: "X Position:",
    },
    songPos1: {
      min: "0",
      max: "100",
      value: "0",
      step: "1",
      label: "Song Position:",
    },
    lowPass1: {
      min: "20",
      max: "6000",
      value: "20000",
      step: "1",
      label: "Low-pass Cutoff:",
    },
    highPass1: {
      min: "20",
      max: "6000",
      value: "20",
      step: "1",
      label: "High-pass Cutoff:",
    },
  };

  Object.keys(sliders1).forEach((id) => {
    const settings = sliders1[id];
    const container1 = document.createElement("div");
    const label1 = document.createElement("label");
    label1.htmlFor = id;
    label1.textContent = settings.label;

    const slider1 = document.createElement("input");
    slider1.type = "range";
    slider1.id = id;
    slider1.min = settings.min;
    slider1.max = settings.max;
    slider1.value = settings.value;
    slider1.step = settings.step;

    container1.appendChild(label1);
    container1.appendChild(slider1);
    document.body.appendChild(container1);

    if (id === "songPos1") {
      slider1.addEventListener("input", function () {
        const seek1 = (slider1.value / 100) * sound1.duration();
        sound1.seek(seek1);
      });
    } else if (id === "lowPass1" || id === "highPass1") {
      slider1.addEventListener("input", function () {
        updateFilters1(id, parseFloat(slider1.value));
      });
    } else {
      slider1.addEventListener("input", handlePositionChange1);
    }
  });

  // Initialize Howler sound with filters and song position slider
  const sound1 = new Howl({
    src: ["Intro2.mp3"],
    loop: true,
    volume: 0.5,
    onplay: function () {
      requestAnimationFrame(updateProgress1);
    },
    onseek: updateProgress1,
    onend: function () {
      playButton1.textContent = "Play";
      document.getElementById("songPos1").value = 0;
    },
  });

  // Filters initialization
  const lowPass1 = Howler.ctx.createBiquadFilter();
  lowPass1.type = "lowpass";
  lowPass1.frequency.value = 20000; // Start without filtering

  const highPass1 = Howler.ctx.createBiquadFilter();
  highPass1.type = "highpass";
  highPass1.frequency.value = 20; // Start without filtering

  // Connect Howler sound output to filters, then to destination
  sound1._sounds[0]._node.disconnect();
  sound1._sounds[0]._node.connect(lowPass1);
  lowPass1.connect(highPass1);
  highPass1.connect(Howler.ctx.destination);

  // Function to update filter settings
  function updateFilters1(filterId, value) {
    if (filterId === "lowPass1") {
      lowPass1.frequency.value = value;
    } else if (filterId === "highPass1") {
      highPass1.frequency.value = value;
    }
  }

  // Play/Pause toggle
  playButton1.addEventListener("click", function () {
    if (sound1.playing()) {
      sound1.pause();
      playButton1.textContent = "Play";
    } else {
      sound1.play();
      playButton1.textContent = "Pause";
    }
  });

  // Update song position slider as the song plays
  function updateProgress1() {
    const songPosSlider1 = document.getElementById("songPos1");
    songPosSlider1.value = (sound1.seek() / sound1.duration()) * 100;
    if (sound1.playing()) {
      requestAnimationFrame(updateProgress1);
    }
  }

  // Function to update sound position
  function handlePositionChange1() {
    const x1 = parseFloat(document.getElementById("xPos1").value);
    sound1.pos(x1, 0, 0); // Updated to use only X position for 3D sound
  }

  // Create and append the swap button
  const swapButton = document.createElement("button");
  swapButton.textContent = "Swap";
  document.body.appendChild(swapButton);

  // Swap button functionality
  swapButton.addEventListener("click", function () {
    if (sound.playing()) {
      sound.pause();
      playButton.textContent = "Play";
    } else {
      sound.play();
      playButton.textContent = "Pause";
    }
    if (sound1.playing()) {
      sound1.pause();
      playButton1.textContent = "Play";
    } else {
      sound1.play();
      playButton1.textContent = "Pause";
    }
  });
});
