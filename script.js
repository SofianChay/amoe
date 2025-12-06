document.addEventListener('DOMContentLoaded', () => {
    // --- RoPE Figure Data & Logic ---
    const ropeSamples = [
        {
            name: "Sample 1",
            original: "rope_figures/original_images/image_1.png",
            axial: {
                "256": "rope_figures/axial_rope/256/image_1.png",
                "768": "rope_figures/axial_rope/768/image_1.png",
                "2048": "rope_figures/axial_rope/2048/image_1.png"
            },
            golden: {
                "256": "rope_figures/golden_rope/256/image_1.png",
                "768": "rope_figures/golden_rope/768/image_1.png",
                "2048": "rope_figures/golden_rope/2048/image_1.png"
            }
        },
        {
            name: "Sample 2",
            original: "rope_figures/original_images/image_2.png",
            axial: {
                "256": "rope_figures/axial_rope/256/image_2.png",
                "768": "rope_figures/axial_rope/768/image_2.png",
                "2048": "rope_figures/axial_rope/2048/image_2.png"
            },
            golden: {
                "256": "rope_figures/golden_rope/256/image_2.png",
                "768": "rope_figures/golden_rope/768/image_2.png",
                "2048": "rope_figures/golden_rope/2048/image_2.png"
            }
        },
        {
            name: "Sample 3",
            original: "rope_figures/original_images/image_3.png",
            axial: {
                "256": "rope_figures/axial_rope/256/image_3.png",
                "768": "rope_figures/axial_rope/768/image_3.png",
                "2048": "rope_figures/axial_rope/2048/image_3.png"
            },
            golden: {
                "256": "rope_figures/golden_rope/256/image_3.png",
                "768": "rope_figures/golden_rope/768/image_3.png",
                "2048": "rope_figures/golden_rope/2048/image_3.png"
            }
        }
    ];

    let ropeIndex = 0;

    const ropeSampleIndicator = document.getElementById('ropeSampleIndicator');
    const prevRoPEBtn = document.getElementById('prevRoPESample');
    const nextRoPEBtn = document.getElementById('nextRoPESample');
    
    const ropeOriginal = document.getElementById('rope-original');
    const golden256 = document.getElementById('golden-256');
    const golden768 = document.getElementById('golden-768');
    const golden2048 = document.getElementById('golden-2048');
    const axial256 = document.getElementById('axial-256');
    const axial768 = document.getElementById('axial-768');
    const axial2048 = document.getElementById('axial-2048');

    function updateRoPEDisplay() {
        const sample = ropeSamples[ropeIndex];
        
        if (ropeSampleIndicator) ropeSampleIndicator.textContent = `SAMPLE ${ropeIndex + 1}/${ropeSamples.length}`;

        const images = [ropeOriginal, golden256, golden768, golden2048, axial256, axial768, axial2048];
        
        images.forEach(img => {
            if(img) img.style.opacity = 0;
        });

        setTimeout(() => {
            if(ropeOriginal) ropeOriginal.src = sample.original;
            if(golden256) golden256.src = sample.golden["256"];
            if(golden768) golden768.src = sample.golden["768"];
            if(golden2048) golden2048.src = sample.golden["2048"];
            if(axial256) axial256.src = sample.axial["256"];
            if(axial768) axial768.src = sample.axial["768"];
            if(axial2048) axial2048.src = sample.axial["2048"];

            images.forEach(img => {
                if(img) {
                    img.onload = () => { img.style.opacity = 1; };
                    if (img.complete) img.style.opacity = 1; 
                }
            });
        }, 200);
    }

    if (prevRoPEBtn) prevRoPEBtn.addEventListener('click', () => {
        ropeIndex = (ropeIndex - 1 + ropeSamples.length) % ropeSamples.length;
        updateRoPEDisplay();
    });

    if (nextRoPEBtn) nextRoPEBtn.addEventListener('click', () => {
        ropeIndex = (ropeIndex + 1) % ropeSamples.length;
        updateRoPEDisplay();
    });

    updateRoPEDisplay();


    // --- PCA Figure Data & Logic ---
    const pcaSamples = [];
    for (let i = 1; i <= 5; i++) {
        pcaSamples.push({
            original: `pca_maps/exp${i}/original.png`,
            amoe: `pca_maps/exp${i}/amoe.png`,
            dino: `pca_maps/exp${i}/dino.png`,
            dino_head: `pca_maps/exp${i}/dino_head.png`,
            siglip: `pca_maps/exp${i}/siglip.png`,
            siglip_head: `pca_maps/exp${i}/siglip_head.png`
        });
    }

    let pcaIndex = 0;

    const pcaSampleIndicator = document.getElementById('pcaSampleIndicator');
    const prevPCABtn = document.getElementById('prevPCASample');
    const nextPCABtn = document.getElementById('nextPCASample');

    const pcaOriginal = document.getElementById('pca-original');
    const pcaAmoe = document.getElementById('pca-amoe');
    const pcaDino = document.getElementById('pca-dino');
    const pcaDinoHead = document.getElementById('pca-dino-head');
    const pcaSiglip = document.getElementById('pca-siglip');
    const pcaSiglipHead = document.getElementById('pca-siglip-head');

    function updatePCADisplay() {
        const sample = pcaSamples[pcaIndex];

        if (pcaSampleIndicator) pcaSampleIndicator.textContent = `SAMPLE ${pcaIndex + 1}/${pcaSamples.length}`;

        const images = [pcaOriginal, pcaAmoe, pcaDino, pcaDinoHead, pcaSiglip, pcaSiglipHead];

        images.forEach(img => {
            if(img) img.style.opacity = 0;
        });

        setTimeout(() => {
            if(pcaOriginal) pcaOriginal.src = sample.original;
            if(pcaAmoe) pcaAmoe.src = sample.amoe;
            if(pcaDino) pcaDino.src = sample.dino;
            if(pcaDinoHead) pcaDinoHead.src = sample.dino_head;
            if(pcaSiglip) pcaSiglip.src = sample.siglip;
            if(pcaSiglipHead) pcaSiglipHead.src = sample.siglip_head;

            images.forEach(img => {
                if(img) {
                    img.onload = () => { img.style.opacity = 1; };
                    if (img.complete) img.style.opacity = 1;
                }
            });
        }, 200);
    }

    if (prevPCABtn) prevPCABtn.addEventListener('click', () => {
        pcaIndex = (pcaIndex - 1 + pcaSamples.length) % pcaSamples.length;
        updatePCADisplay();
    });

    if (nextPCABtn) nextPCABtn.addEventListener('click', () => {
        pcaIndex = (pcaIndex + 1) % pcaSamples.length;
        updatePCADisplay();
    });

    updatePCADisplay();
});
