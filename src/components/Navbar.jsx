import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../haru/Navbar.css';

const Navbar = ({ config }) => {
  const [openSub, setOpenSub] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false)
  const [mobileIndex, setMobileIndex] = useState(null)

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickOutside = (event) => {
    try {
      const ElementPath = event.composedPath().reverse()
      if (ElementPath[9].classList.contains("header-main")) return

      setOpenMobile(null)
      setOpenSub(null);
    } catch { setOpenSub(null); setOpenMobile(null) }
  };

  document.addEventListener('click', (event) => {
    try {
      const ElementPath = event.composedPath().reverse()
      if (ElementPath[9].classList.contains("header-main")) return
      if (ElementPath[9].classList.contains("sub-menu-list-box")) return
      if (ElementPath[8].classList.contains("mobile-nav")) return

      setOpenMobile(null)
      setOpenSub(null);
    } catch  {
      setOpenSub(null);
      setOpenMobile(null)
    }
  })


  return (
    <nav>
      <div className={`header-box ${isScrolled && 'scrolled'}`}>
        <div className="desktop-nav">

          <header className="header-main">

            <div className="header-logo-box">
              {config.logoOffScroll}
              {config.logoOnScroll}
            </div>

            <div className="options-box">
              {config.leftContent && <div className="left-content-box">
                {config.leftContent.map(({ isLink, redirect, text, columns }, index) => (

                  isLink
                    ? <Link onClick={() => setOpenSub(null)} key={`${index}-${redirect}`} to={redirect} >
                      <button className='option-menu-header'>
                        <span>{text}</span>
                      </button>
                    </Link>
                    : <div key={`${index}-${text}-open-list`} className="desktop-sub-menu">

                      <button onClick={() => {

                        if (openSub && openSub.name === text) {
                          setOpenSub(null)
                          return
                        }



                        setOpenSub({ columns, name: text })
                      }} className="option-menu-header">
                        <div className={`indicator-box ${openSub && openSub.name === text ? 'rotate' : ''}`} >
                          <img src=""></img>
                        </div>
                        <span>{text}</span>
                      </button>
                    </div>

                ))}
              </div>}
              {config.rightContent && <div className="right-content-box">
              </div>}
            </div>
          </header>
          <div className={`sub-menu-list-box ${openSub ? '' : 'closed'}`}>

            <div className="genric-sub-options-box">
              {openSub && openSub.columns.map((col, colIndex) => {
                return (

                  <div key={`${colIndex}-column-sub-menu`} className="column-sub-options">
                    {col.options.map(({ isLink, text, redirect }, optionIndex) => isLink && (
                      <Link onClick={() => setOpenSub(null)} key={`${optionIndex}-item-column-sub-menu`} to={redirect} >
                        <button className="desktop-sub-menu" >
                          <p>{text}</p>
                        </button>
                      </Link>
                    ))}
                  </div>

                )

              })}
            </div>
          </div>


        </div>

        <div className="mobile-nav">
          <header>
            <button onClick={() => setOpenMobile(true)} className="open-mobile-menu"><span>Menu</span></button>
            <button><span>Account</span></button>
          </header>

          {<div className={`side-bar-box ${openMobile ? 'openned' : ''}`}>
            <button onClick={() => setOpenMobile(false)} className="close-mobile-menu"><span>close</span></button>
            <div className="mobile-logo-box">{config.logo_3}</div>
            <div className="mobile-options-box">

              {config.leftContent.map(({ isLink, text, columns, redirect }, index) => {
                return (
                  <div key={`mobile-${text}-${index}`} className="mobile-option">

                    {isLink
                      ?
                      <Link onClick={() => (setOpenMobile(false), setMobileIndex(null))} to={redirect} ><button className="mobile-sub-option-btn"><span>{text}</span></button></Link>
                      : <>
                        <button onClick={() => setMobileIndex(prev => prev === index ? null : index)} className="sub-option-indicator">
                          <span>{text}</span>
                          <div className={`indicator-box ${index === mobileIndex && 'rotate'}`} >
                            <img src=""></img>
                          </div>
                        </button>

                        <div className={`mobile-sub-option-box ${index === mobileIndex && 'openned'}`}>
                          {
                            columns.map(({ options }) => (
                              options.map((option, indexOption) => {
                                return option.isLink
                                  && <Link onClick={() => (setOpenMobile(false), setMobileIndex(null))} key={`mobile-redirect-option-${option.redirect}-${option.text}-${indexOption}`} to={option.redirect} >
                                    <button className="mobile-sub-menu-option-generic"><span>{option.text}</span></button>
                                  </Link>
                              })
                            ))
                          }
                        </div>
                      </>
                    }
                  </div>
                )
              })}
            </div>
          </div>}
        </div>
      </div>
    </nav>
  )
};

export default Navbar;