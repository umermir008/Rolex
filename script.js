// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load additional sections
    loadSections();
    
    // Initialize animations
    initHeroAnimations();
    initScrollAnimations();
    initInteractiveElements();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
});

// Load additional sections dynamically
function loadSections() {
    // Collections Section
    document.getElementById('collections-section').innerHTML = `
        <section id="collections" class="py-20 luxury-gradient">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gold fade-in-up">
                        Iconic Collections
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up">
                        Discover our legendary timepieces, each representing the pinnacle of Swiss watchmaking excellence.
                    </p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="collection-card bg-gray-800 rounded-lg overflow-hidden card-hover fade-in-up">
                        <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Rolex Submariner" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-playfair font-bold mb-2 text-gold">Submariner</h3>
                            <p class="text-gray-300 mb-4">The ultimate diving watch, waterproof to 300 meters.</p>
                            <button class="bg-emerald text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors ripple">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div class="collection-card bg-gray-800 rounded-lg overflow-hidden card-hover fade-in-up">
                        <img src="https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Rolex Daytona" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-playfair font-bold mb-2 text-gold">Daytona</h3>
                            <p class="text-gray-300 mb-4">Born for racing, designed for victory and precision timing.</p>
                            <button class="bg-emerald text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors ripple">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div class="collection-card bg-gray-800 rounded-lg overflow-hidden card-hover fade-in-up">
                        <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Rolex Oyster Perpetual" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-playfair font-bold mb-2 text-gold">Oyster Perpetual</h3>
                            <p class="text-gray-300 mb-4">Pure essence of the Oyster watch in its simplest form.</p>
                            <button class="bg-emerald text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors ripple">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div class="collection-card bg-gray-800 rounded-lg overflow-hidden card-hover fade-in-up">
                        <img src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Rolex Datejust" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-playfair font-bold mb-2 text-gold">Datejust</h3>
                            <p class="text-gray-300 mb-4">The archetype of the classic watch, timeless elegance.</p>
                            <button class="bg-emerald text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors ripple">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Craftsmanship Section
    document.getElementById('craftsmanship-section').innerHTML = `
        <section id="craftsmanship" class="py-20 relative overflow-hidden" style="background-image: url('https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'); background-size: cover; background-position: center;">
            <div class="absolute inset-0 bg-black/80"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-10">
                <svg class="w-96 h-96 rotating-gears" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="#FFD700" stroke-width="2"/>
                    <circle cx="50" cy="50" r="30" stroke="#FFD700" stroke-width="1"/>
                    <circle cx="50" cy="50" r="20" stroke="#FFD700" stroke-width="1"/>
                    <circle cx="50" cy="50" r="10" stroke="#FFD700" stroke-width="1"/>
                </svg>
            </div>
            <div class="container mx-auto px-6 relative z-10">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gold fade-in-up">
                        Precision & Craftsmanship
                    </h2>
                    <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed fade-in-up">
                        Every Rolex is a masterpiece of engineering, where traditional Swiss craftsmanship meets cutting-edge technology.
                    </p>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="text-center p-8 bg-black/50 rounded-lg backdrop-blur-sm icon-card fade-in-up">
                        <div class="w-16 h-16 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-playfair font-bold mb-4 text-gold">Durability</h3>
                        <p class="text-gray-300">Built to last generations with materials that resist corrosion and wear.</p>
                    </div>
                    <div class="text-center p-8 bg-black/50 rounded-lg backdrop-blur-sm icon-card fade-in-up">
                        <div class="w-16 h-16 mx-auto mb-6 bg-emerald rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-playfair font-bold mb-4 text-emerald">Precision</h3>
                        <p class="text-gray-300">Chronometer certification guarantees accuracy within -2/+2 seconds per day.</p>
                    </div>
                    <div class="text-center p-8 bg-black/50 rounded-lg backdrop-blur-sm icon-card fade-in-up">
                        <div class="w-16 h-16 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-playfair font-bold mb-4 text-gold">Prestige</h3>
                        <p class="text-gray-300">A symbol of success and achievement recognized worldwide.</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Video Section
    document.getElementById('video-section').innerHTML = `
        <section id="video" class="py-20 bg-gray-900">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gold fade-in-up">
                        The Art of Watchmaking
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up">
                        Experience the meticulous craftsmanship behind every Rolex timepiece.
                    </p>
                </div>
                <div class="relative max-w-4xl mx-auto fade-in-up">
                    <div class="aspect-video bg-black rounded-lg overflow-hidden relative group video-container">
                        <iframe class="w-full h-full" src="https://www.youtube.com/embed/1gTkgCpX8eo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-gold/30 rounded-lg transition-all duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Gallery Section
    document.getElementById('gallery-section').innerHTML = `
        <section id="gallery" class="py-20 luxury-gradient">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gold fade-in-up">
                        Lifestyle Gallery
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up">
                        Discover how Rolex complements the distinguished lifestyle of those who wear it.
                    </p>
                </div>
                <div class="slide-gallery space-x-6 pb-4" id="gallery-slider">
                    <div class="flex-none w-80 gallery-image">
                        <img src="https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Luxury Rolex Timepiece" class="w-full h-60 object-cover rounded-lg transition-transform duration-300 cursor-pointer">
                    </div>
                    <div class="flex-none w-80 gallery-image">
                        <img src="https://images.unsplash.com/photo-1594735797203-fc0d6cfa9bec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Golden Rolex Watch" class="w-full h-60 object-cover rounded-lg transition-transform duration-300 cursor-pointer">
                    </div>
                    <div class="flex-none w-80 gallery-image">
                        <img src="https://images.unsplash.com/photo-1609081205224-b99c9d8f79ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Elegant Rolex Collection" class="w-full h-60 object-cover rounded-lg transition-transform duration-300 cursor-pointer">
                    </div>
                    <div class="flex-none w-80 gallery-image">
                        <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Rolex Craftsmanship" class="w-full h-60 object-cover rounded-lg transition-transform duration-300 cursor-pointer">
                    </div>
                    <div class="flex-none w-80 gallery-image">
                        <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Professional Rolex Style" class="w-full h-60 object-cover rounded-lg transition-transform duration-300 cursor-pointer">
                    </div>
                    <div class="flex-none w-80 gallery-image">
                        <img src="https://images.unsplash.com/photo-1509048191080-d2e2678e3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Business Luxury Rolex" class="w-full h-60 object-cover rounded-lg transition-transform duration-300 cursor-pointer">
                    </div>
                    <div class="flex-none w-80 gallery-image">
                        <img src="https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Vintage Rolex Heritage" class="w-full h-60 object-cover rounded-lg transition-transform duration-300 cursor-pointer">
                    </div>
                </div>
            </div>
        </section>
    `;

    // Contact Section
    document.getElementById('contact-section').innerHTML = `
        <section id="contact" class="py-20 relative overflow-hidden" style="background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'); background-size: cover; background-position: center;">
            <div class="absolute inset-0 bg-black/70"></div>
            <div class="container mx-auto px-6 relative z-10">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gold fade-in-up">
                            Book an Appointment
                        </h2>
                        <p class="text-xl text-gray-300 fade-in-up">
                            Schedule a private consultation to discover your perfect Rolex timepiece.
                        </p>
                    </div>
                    <form id="appointmentForm" class="bg-black/50 backdrop-blur-sm p-8 rounded-lg fade-in-up">
                        <div class="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label class="block text-gray-300 mb-2">Full Name</label>
                                <input type="text" class="w-full p-3 bg-gray-800 border border-gray-600 rounded form-field focus:outline-none text-white" placeholder="Enter your name" required>
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2">Email</label>
                                <input type="email" class="w-full p-3 bg-gray-800 border border-gray-600 rounded form-field focus:outline-none text-white" placeholder="Enter your email" required>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label class="block text-gray-300 mb-2">Phone</label>
                                <input type="tel" class="w-full p-3 bg-gray-800 border border-gray-600 rounded form-field focus:outline-none text-white" placeholder="Enter your phone" required>
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2">Preferred Model</label>
                                <select class="w-full p-3 bg-gray-800 border border-gray-600 rounded form-field focus:outline-none text-white">
                                    <option>Select a model</option>
                                    <option>Submariner</option>
                                    <option>Daytona</option>
                                    <option>Oyster Perpetual</option>
                                    <option>Datejust</option>
                                    <option>GMT-Master II</option>
                                    <option>Day-Date</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-300 mb-2">Message (Optional)</label>
                            <textarea rows="4" class="w-full p-3 bg-gray-800 border border-gray-600 rounded form-field focus:outline-none text-white" placeholder="Tell us about your preferences..."></textarea>
                        </div>
                        <button type="submit" class="w-full bg-gold text-black py-4 text-lg font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 ripple">
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

// Hero section animations
function initHeroAnimations() {
    const heroWatch = document.getElementById('heroWatch');
    
    if (heroWatch) {
        console.log('Hero watch found, checking image details...');
        console.log('Image src:', heroWatch.src);
        console.log('Image complete:', heroWatch.complete);
        console.log('Image naturalWidth:', heroWatch.naturalWidth);
        console.log('Image naturalHeight:', heroWatch.naturalHeight);
        
        // Force visibility immediately regardless of load status
        makeHeroWatchVisible();
        
        // Ensure image is loaded before animating
        if (heroWatch.complete && heroWatch.naturalHeight !== 0) {
            console.log('Image already loaded, starting animation');
            startHeroAnimation();
        } else {
            console.log('Waiting for image to load...');
            heroWatch.addEventListener('load', () => {
                console.log('Image loaded successfully!');
                startHeroAnimation();
            });
            heroWatch.addEventListener('error', () => {
                console.log('Image failed to load, using fallback');
                handleImageError();
            });
            
            // Force start animation after 2 seconds regardless
            setTimeout(() => {
                console.log('Force starting animation after timeout');
                startHeroAnimation();
            }, 2000);
        }
    } else {
        console.error('Hero watch element not found');
        setTimeout(initHeroAnimations, 500); // Retry after 500ms
    }
    
    function startHeroAnimation() {
        console.log('Starting hero animation...');
        
        // Force hero watch visibility immediately
        heroWatch.classList.remove('loading');
        heroWatch.style.opacity = '1';
        heroWatch.style.display = 'block';
        heroWatch.style.visibility = 'visible';
        heroWatch.style.width = '20rem';
        heroWatch.style.height = '20rem';
        heroWatch.style.position = 'relative';
        heroWatch.style.zIndex = '10';
        
        // Simple initial animation without complex 3D
        gsap.set(heroWatch, { 
            opacity: 1, 
            scale: 1,
            rotation: 0,
            x: 0,
            y: 0,
            visibility: 'visible'
        });
        
        // Start with simple rotation to ensure it's working
        gsap.to(heroWatch, {
            rotation: 360,
            duration: 2,
            ease: "power2.out",
            onComplete: () => {
                // Add continuous rotation after initial spin
                gsap.to(heroWatch, {
                    rotation: "+=360",
                    duration: 20,
                    ease: "none",
                    repeat: -1
                });
            }
        });
        
        // Animate other elements simply
        gsap.to(["#heroTitle", "#heroSubtext", "#heroButton"], {
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
        });
    }
    
    function handleImageError() {
        console.log('Image failed to load, using fallback...');
        makeHeroWatchVisible();
    }
    
    function makeHeroWatchVisible() {
        if (heroWatch) {
            console.log('Making hero watch visible with fallback...');
            
            // Force all visibility properties
            heroWatch.classList.remove('loading');
            heroWatch.style.opacity = '1';
            heroWatch.style.display = 'block';
            heroWatch.style.visibility = 'visible';
            heroWatch.style.transform = 'scale(1)';
            heroWatch.style.width = '20rem';
            heroWatch.style.height = '20rem';
            heroWatch.style.position = 'relative';
            heroWatch.style.zIndex = '10';
            heroWatch.style.objectFit = 'cover';
            heroWatch.style.borderRadius = '50%';
            
            // Simple CSS animation fallback
            heroWatch.style.animation = 'simpleRotate 20s linear infinite';
            
            // Make other elements visible too
            const heroTitle = document.getElementById('heroTitle');
            const heroSubtext = document.getElementById('heroSubtext');
            const heroButton = document.getElementById('heroButton');
            
            if (heroTitle) heroTitle.style.opacity = '1';
            if (heroSubtext) heroSubtext.style.opacity = '1';
            if (heroButton) heroButton.style.opacity = '1';
        }
    }
    
    // Create sparkle effect around the watch
    function createSparkleEffect() {
        const watchContainer = document.querySelector('.watch-container');
        if (!watchContainer) return;
        
        for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #FFD700;
                border-radius: 50%;
                pointer-events: none;
                opacity: 0;
            `;
            watchContainer.appendChild(sparkle);
            
            // Animate sparkles
            gsap.set(sparkle, {
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150,
                scale: 0
            });
            
            gsap.to(sparkle, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                delay: Math.random() * 2 + 1,
                yoyo: true,
                repeat: -1,
                repeatDelay: Math.random() * 3 + 2,
                ease: "power2.inOut"
            });
        }
    }
}

// Scroll-triggered animations
function initScrollAnimations() {
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    
    fadeElements.forEach(element => {
        gsap.fromTo(element, {
            opacity: 0,
            y: element.classList.contains('fade-in-up') ? 50 : 0,
            x: element.classList.contains('fade-in-left') ? -50 : 
               element.classList.contains('fade-in-right') ? 50 : 0,
            scale: element.classList.contains('scale-in') ? 0.8 : 1
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // About section image tilt
    gsap.to(".about-image img", {
        rotationY: 15,
        rotationX: 5,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about-image",
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });

    // Collection cards stagger animation
    gsap.fromTo(".collection-card", {
        opacity: 0,
        y: 50,
        scale: 0.9
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#collections",
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });
}

// Interactive elements
function initInteractiveElements() {
    // Initialize hero interactions
    initHeroInteractions();
    
    // Hero button click
    document.getElementById('heroButton').addEventListener('click', function() {
        document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
    });

    // Gallery images click for fullscreen view
    setTimeout(() => {
        const galleryImages = document.querySelectorAll('.gallery-image img');
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                // Create fullscreen overlay
                const overlay = document.createElement('div');
                overlay.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
                overlay.style.cursor = 'pointer';
                
                const fullImg = document.createElement('img');
                fullImg.src = this.src;
                fullImg.className = 'max-w-full max-h-full object-contain rounded-lg';
                fullImg.style.maxWidth = '90vw';
                fullImg.style.maxHeight = '90vh';
                
                overlay.appendChild(fullImg);
                document.body.appendChild(overlay);
                
                // Close on click
                overlay.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                });
                
                // Add entrance animation
                gsap.fromTo(overlay, 
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3 }
                );
                gsap.fromTo(fullImg, 
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.3, delay: 0.1 }
                );
            });
        });
    }, 1000);

    // Collection card enhanced interactions
    setTimeout(() => {
        const collectionCards = document.querySelectorAll('.collection-card');
        collectionCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    rotationY: 5,
                    rotationX: 2,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    rotationY: 0,
                    rotationX: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }, 1000);

    // Form submission
    setTimeout(() => {
        const form = document.getElementById('appointmentForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simple form validation and success message
                const button = this.querySelector('button[type="submit"]');
                const originalText = button.textContent;
                
                button.textContent = 'Booking...';
                button.disabled = true;
                
                setTimeout(() => {
                    button.textContent = 'Appointment Booked!';
                    button.style.backgroundColor = '#10B981';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                        button.style.backgroundColor = '#FFD700';
                        this.reset();
                    }, 3000);
                }, 2000);
            });
        }
    }, 1000);

    // Gallery auto-scroll with pause on hover
    setTimeout(() => {
        const gallery = document.getElementById('gallery-slider');
        if (gallery) {
            let scrollAmount = 0;
            const scrollStep = 1;
            const scrollDelay = 50;
            let isScrolling = true;

            function autoScroll() {
                if (!isScrolling) return;
                
                if (gallery.scrollLeft >= (gallery.scrollWidth - gallery.clientWidth)) {
                    scrollAmount = 0;
                    gallery.scrollLeft = 0;
                } else {
                    scrollAmount += scrollStep;
                    gallery.scrollLeft = scrollAmount;
                }
            }

            const scrollInterval = setInterval(autoScroll, scrollDelay);
            
            // Pause on hover
            gallery.addEventListener('mouseenter', () => {
                isScrolling = false;
            });
            
            gallery.addEventListener('mouseleave', () => {
                isScrolling = true;
            });
        }
    }, 1000);

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileMenuBtn && mobileMenu) {
        let isMenuOpen = false;
        
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        function toggleMobileMenu() {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                // Open menu
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('show');
                hamburgerIcon.classList.add('rotate', 'hidden');
                closeIcon.classList.remove('hidden');
                closeIcon.classList.add('show');
                document.body.classList.add('mobile-menu-open');
                
                // Animate menu items
                const menuItems = mobileMenu.querySelectorAll('a');
                gsap.fromTo(menuItems, 
                    { opacity: 0, x: -30 },
                    { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, delay: 0.2 }
                );
            } else {
                // Close menu
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
                hamburgerIcon.classList.remove('rotate', 'hidden');
                closeIcon.classList.add('hidden');
                closeIcon.classList.remove('show');
                document.body.classList.remove('mobile-menu-open');
            }
        }
        
        // Close menu when clicking on links
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                toggleMobileMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMobileMenu();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768 && isMenuOpen) {
                toggleMobileMenu();
            }
        });
    }
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax effect for background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading class to body when page loads
window.addEventListener('load', () => {
    document.body.classList.add('loading');
});

// Add enhanced 3D hover effects for hero elements
function initHeroInteractions() {
    setTimeout(() => {
        const heroWatch = document.getElementById('heroWatch');
        const heroButton = document.getElementById('heroButton');
        const heroTitle = document.getElementById('heroTitle');
        
        if (heroWatch) {
            heroWatch.addEventListener('mouseenter', () => {
                gsap.to(heroWatch, {
                    scale: 1.15,
                    rotationY: 15,
                    rotationX: 10,
                    z: 50,
                    filter: "drop-shadow(0 0 40px rgba(255, 215, 0, 1)) drop-shadow(0 0 80px rgba(255, 215, 0, 0.6))",
                    duration: 0.4,
                    ease: "power2.out"
                });
                
                // Enhance sparkles on hover
                const sparkles = document.querySelectorAll('.sparkle-3d');
                sparkles.forEach(sparkle => {
                    gsap.to(sparkle, {
                        scale: 1.5,
                        opacity: 1,
                        duration: 0.3
                    });
                });
            });
            
            heroWatch.addEventListener('mouseleave', () => {
                gsap.to(heroWatch, {
                    scale: 1,
                    rotationY: 0,
                    rotationX: 0,
                    z: 0,
                    filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))",
                    duration: 0.6,
                    ease: "power2.out"
                });
                
                // Reset sparkles
                const sparkles = document.querySelectorAll('.sparkle-3d');
                sparkles.forEach(sparkle => {
                    gsap.to(sparkle, {
                        scale: 1,
                        opacity: 0.7,
                        duration: 0.4
                    });
                });
            });
        }
        
        if (heroButton) {
            heroButton.addEventListener('mouseenter', () => {
                gsap.to(heroButton, {
                    scale: 1.08,
                    y: -5,
                    z: 15,
                    rotationX: -5,
                    boxShadow: "0 15px 35px rgba(255, 215, 0, 0.5)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            heroButton.addEventListener('mouseleave', () => {
                gsap.to(heroButton, {
                    scale: 1,
                    y: 0,
                    z: 0,
                    rotationX: 0,
                    boxShadow: "0 0 0px rgba(255, 215, 0, 0)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }
        
        if (heroTitle) {
            heroTitle.addEventListener('mouseenter', () => {
                gsap.to(heroTitle.querySelector('.hero-gold-text'), {
                    textShadow: "0 0 25px rgba(255, 215, 0, 1), 0 0 50px rgba(255, 215, 0, 0.5)",
                    scale: 1.02,
                    z: 10,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
            
            heroTitle.addEventListener('mouseleave', () => {
                gsap.to(heroTitle.querySelector('.hero-gold-text'), {
                    textShadow: "0 0 0px rgba(255, 215, 0, 0)",
                    scale: 1,
                    z: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
        }
    }, 1000);
}

// Create enhanced 3D sparkle effect around the watch - DISABLED FOR NOW
function createSparkleEffect() {
    console.log('Sparkle effect disabled to focus on image visibility');
    // Temporarily disabled to ensure image loads properly
    return;
    
    // ... existing code ...
}

// Add mouse parallax effect for 3D interaction
function addMouseParallax() {
    const heroWatch = document.getElementById('heroWatch');
    const heroContainer = document.querySelector('.hero-content');
    
    if (!heroWatch || !heroContainer) return;
    
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate mouse position as percentage
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;
        
        // Apply subtle 3D parallax to watch
        gsap.to(heroWatch, {
            rotationY: xPercent * 10,
            rotationX: -yPercent * 10,
            x: xPercent * 20,
            y: yPercent * 20,
            z: Math.abs(xPercent) * 15,
            duration: 0.8,
            ease: "power2.out"
        });
        
        // Apply parallax to container
        gsap.to(heroContainer, {
            x: xPercent * 5,
            y: yPercent * 5,
            duration: 1,
            ease: "power2.out"
        });
        
        // Apply parallax to sparkles
        const sparkles = document.querySelectorAll('.sparkle-3d');
        sparkles.forEach((sparkle, index) => {
            const factor = (index % 3) + 1;
            gsap.to(sparkle, {
                x: sparkle._gsap.x + (xPercent * factor * 3),
                y: sparkle._gsap.y + (yPercent * factor * 3),
                duration: 1.2,
                ease: "power2.out"
            });
        });
    });
}