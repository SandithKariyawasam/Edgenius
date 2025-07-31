import React, { useState, useRef, useEffect } from 'react';
import { TweenLite, Power2, Back } from 'gsap';
import '../assets/css/style.css';

const Index = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [menuState, setMenuState] = useState('menu'); // "menu" or "arrow"

  // Refs for SVG paths
  const topLineRef = useRef(null);
  const middleLineRef = useRef(null);
  const bottomLineRef = useRef(null);

  // Ref for custom cursor div
  const cursorRef = useRef(null);

  // Toggle menu open/close with animation
  const toggleNav = () => {
    setNavOpen(!navOpen);

    if (menuState === 'menu') {
      // Animate menu icon to arrow (cross)
      TweenLite.to(middleLineRef.current, 0.3, { opacity: 0, ease: Power2.easeInOut });
      TweenLite.to(topLineRef.current, 0.5, {
        attr: { d: 'M35,35 L65,65' },
        ease: Back.easeOut.config(1.7),
      });
      TweenLite.to(bottomLineRef.current, 0.5, {
        attr: { d: 'M35,65 L65,35' },
        ease: Back.easeOut.config(1.7),
      });
      setMenuState('arrow');
    } else {
      // Animate arrow (cross) back to menu icon (3 lines)
      TweenLite.to(middleLineRef.current, 0.3, { opacity: 1, ease: Power2.easeInOut });
      TweenLite.to(topLineRef.current, 0.5, {
        attr: { d: 'M30,37 L70,37' },
        ease: Back.easeOut.config(1.7),
      });
      TweenLite.to(bottomLineRef.current, 0.5, {
        attr: { d: 'M30,63 L70,63' },
        ease: Back.easeOut.config(1.7),
      });
      setMenuState('menu');
    }
  };

  // Custom cursor logic
  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      TweenLite.to(cursor, 0, {
        top: e.clientY + 'px',
        left: e.clientX + 'px',
        opacity: 1,
      });
    };

    const touchMoveCursor = (e) => {
      if (e.touches.length > 0) {
        TweenLite.to(cursor, 0, {
          top: e.touches[0].clientY + 'px',
          left: e.touches[0].clientX + 'px',
          opacity: 1,
        });
      }
    };

    const hideCursor = () => {
      TweenLite.to(cursor, 0.3, { opacity: 0 });
    };

    // Add hover classes on links/buttons/nav-btn
    const interactiveEls = document.querySelectorAll('a, button, #nav-btn, input.btn');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseover', () => cursor.classList.add('custom-cursor--link'));
      el.addEventListener('mouseout', () => cursor.classList.remove('custom-cursor--link'));
    });

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('touchmove', touchMoveCursor);
    window.addEventListener('mouseout', hideCursor);
    window.addEventListener('touchend', hideCursor);

    return () => {
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseover', () => cursor.classList.add('custom-cursor--link'));
        el.removeEventListener('mouseout', () => cursor.classList.remove('custom-cursor--link'));
      });
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('touchmove', touchMoveCursor);
      window.removeEventListener('mouseout', hideCursor);
      window.removeEventListener('touchend', hideCursor);
    };
  }, []);

  return (
    <div className="page">
      <header>
        <div className={`d-flex justify-content-between sticky-nav ${navOpen ? 'difference' : ''}`}>
          <div className="logo"></div>
          <div className="box menu" id="nav-btn" onClick={toggleNav} style={{ cursor: 'pointer' }}>
            <svg id="i1" className="icon" viewBox="20 30 60 40">
              <path ref={topLineRef} id="top-line-1" d="M30,37 L70,37 Z"></path>
              <path ref={middleLineRef} id="middle-line-1" d="M30,50 L70,50 Z"></path>
              <path ref={bottomLineRef} id="bottom-line-1" d="M30,63 L70,63 Z"></path>
            </svg>
          </div>
        </div>

        <div id="takeover-nav" className={navOpen ? 'shown' : ''}>
          <div className="container-fluid">
            <div className="row">
              <div className="align-items-center bg-black col-12 col-md-7 d-flex justify-content-center nav-col nav-contact order-1 order-md-0 position-relative px-3 py-5">
                <div className="bg-topographic h-100 position-absolute w-100"></div>
                <div className="content position-relative">
                  <h2 className="mb-5 nav-title white">
                    Discover top-quality courses from industry experts.
                    <span className="d-inline green">.</span>
                  </h2>
                  <ul className="contact-items list-unstyled mb-5 white">
                    <li className="pb-4">
                      <a className="text-decoration-none" href="#">
                        +94 76 942 3847
                      </a>
                    </li>
                    <li className="pb-4">
                      <a className="text-decoration-none" href="#">
                        edugenius@platform.com
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="#">
                        Colombo, Sri Lanka
                      </a>
                    </li>
                  </ul>
                  <div className="social">
                    <a className="green text-decoration-none" href="#">
                      linkedin
                    </a>
                    <span className="mx-2 white">|</span>
                    <a className="green text-decoration-none" href="#">
                      facebook
                    </a>
                    <span className="mx-2 white">|</span>
                    <a className="green text-decoration-none" href="#">
                      instagram
                    </a>
                  </div>
                </div>
              </div>

              <div className="align-items-center bg-green col-12 col-md-5 d-flex nav-col nav-menu order-0 order-md-1 pb-3 pb-md-5 pt-5 px-3 px-md-5">
                <ul className="list-unstyled nav-items">
                  <li className="pb-3">
                    <a className="text-decoration-none" href="#">
                      Courses
                    </a>
                  </li>
                  <li className="pb-3">
                    <a className="text-decoration-none" href="#">
                      About
                    </a>
                  </li>
                  <li className="pb-3">
                    <a className="text-decoration-none" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="align-items-center d-flex hero justify-content-center">
        <div className="video-wrap">
          <video autoPlay playsInline loop muted id="video-bg">
            <source src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="gradient-overlay position-absolute w-100"></div>
        <div className="content mb-5 position-relative text-center">
          <h1 className="blend hero-title">
            Unlock Your Potential with <br />
            EduGenius Learning
          </h1>
        </div>
      </section>


      {/* Custom cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>
    </div>
  );
};

export default Index;
