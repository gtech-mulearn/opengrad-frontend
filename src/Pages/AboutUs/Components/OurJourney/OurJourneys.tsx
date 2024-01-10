import "./OurJourneys.css";

type Props = {};

export const OurJourneys = (_props: Props) => {
  return (
    <div className="page-wrapper">
      <div className="section-timeline-heading">
        <div className="container">
          <div className="padding-vertical-xlarge">
            <div className="timeline-main_heading-wrapper">
              <div className="marginBottomMedium">
                <h2>The story of how we got started on Webflow</h2>
              </div>
              <p className="paragraphLarge">
                Relume was started by two guys with the same mission. <br />
                Our story starts 8 years ago... Strap in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-timeline">
        <div className="container">
          <div className="timeline_component">
            <div className="timeline_progress">
              <div className="timeline_progress-bar"></div>
            </div>
            <div className="timeline_item">
              <div id="timelineLeftVerified" className="timeline_left">
                <div className="timeline_date-text">January 2012</div>
              </div>
              <div id="timelineCenterVerified" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="margin-bottom-xlarge">
                  <div className="timeline_text">
                    Co-founder Dan finishes the economics degree he promised his
                    mum he’d complete, only to never use it and start his own
                    clothing business (love you mum).
                  </div>
                </div>
                <div className="timeline_image-wrapper">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60dda4ae36510574b1a7932a_Image%201%20-%20Transparent.png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="timeline_item">
              <div id="timelineLeftVerified" className="timeline_left">
                <div className="timeline_date-text">June 2016</div>
              </div>
              <div id="timelineCenterVerified" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="marginBottomMedium">
                  <div className="timeline_text">
                    Adam catches wind of Dan’s early success and slides into his
                    DM offering help. Dan politely accepts.
                    <br />
                  </div>
                </div>
                <div className="margin-bottom-xlarge">
                  <div className="inline-block">
                    <a
                      href="https://www.smartcompany.com.au/startupsmart/profiles/sydney-startup-with-500000-in-funding-wants-to-monetise-your-social-media-following/"
                      target="_blank"
                      className="timeline_link w-inline-block"
                    >
                      <div>See the article that got Adam’s attention</div>
                      <img
                        src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4e982f499b91260e0e91_open_in_new.svg"
                        loading="lazy"
                        alt=""
                        className="link-icon"
                      />
                    </a>
                  </div>
                </div>
                <div className="timeline_image-wrapper">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe2f3220f62c99e3f0f_Image%202.png"
                    loading="lazy"
                    width="480"
                    sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, 36vw"
                    srcSet="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe2f3220f62c99e3f0f_Image%202-p-500.png 500w, https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe2f3220f62c99e3f0f_Image%202.png 960w"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="timeline_item">
              <div id="timelineLeftVerified" className="timeline_left">
                <div className="timeline_date-text">August 2017</div>
              </div>
              <div id="timelineCenterVerified" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="marginBottomMedium">
                  <div className="timeline_text">
                    After collectively failing a number of business ventures,
                    Dan and Adam finally have their first break. Together they
                    build Lumio with a team of 7 other legends.
                    <br />
                  </div>
                </div>
                <div className="margin-bottom-xlarge">
                  <p className="text-colour-lightgrey">
                    Lumio, previously called Foenix, was a social media
                    analytics company that helped brands like Audi, David Jones
                    and Red Balloon source legitimate influencers for social
                    media campaigns.
                    <br />
                  </p>
                </div>
                <div className="timeline_image-wrapper marginBottomMedium">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe355e62d52d0a322d8_Image%203.png"
                    loading="lazy"
                    width="480"
                    alt=""
                  />
                </div>
                <div className="timeline_quote-wrapper">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de52655aae394d43a0ac08_Dan.jpg"
                    loading="lazy"
                    alt=""
                    className="timeline_quote-image"
                  />
                  <div className="timeline_quote-text-wrapper">
                    <p className="timeline_quote">
                      “We were essentially the Instagram police and called out
                      fake influencers left, right and centre. It was fun and
                      all, but there is only so many bikini chicks you can look
                      at on Instagram before you start losing your mind.”
                      <br />
                    </p>
                    <p className="timeline_quote-title">
                      Dan, Co-founder and CEO of Lumio
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline_item">
              <div id="timelineLeftVerified" className="timeline_left">
                <div className="timeline_date-text">April 2018</div>
              </div>
              <div id="timelineCenterVerified" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="marginBottomMedium">
                  <div className="timeline_text">
                    Lumio gets acquired by German company, Influencer DB. Yeww!
                    🎉
                    <br />
                  </div>
                </div>
                <div className="margin-bottom-xlarge">
                  <div className="inline-block">
                    <a
                      href="https://www.bandt.com.au/influencerdb-acquires-australian-based-lumio-analytics/"
                      target="_blank"
                      className="timeline_link w-inline-block"
                    >
                      <div>Read about the acquisition</div>
                      <img
                        src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4e982f499b91260e0e91_open_in_new.svg"
                        loading="lazy"
                        alt=""
                        className="link-icon"
                      />
                    </a>
                  </div>
                </div>
                <div className="timeline_image-wrapper marginBottomMedium">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe2c703faf630cb8191_Image%204.png"
                    loading="lazy"
                    width="480"
                    sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, 36vw"
                    srcSet="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe2c703faf630cb8191_Image%204-p-500.png 500w, https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe2c703faf630cb8191_Image%204.png 960w"
                    alt=""
                  />
                </div>
                <div className="timeline_quote-wrapper">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de5451e0fe7488a2d0efda_Adam.jpg"
                    loading="lazy"
                    alt=""
                    className="timeline_quote-image"
                  />
                  <div className="timeline_quote-text-wrapper">
                    <p className="timeline_quote">
                      “After this, we both took up golf on during the week and
                      started eating fancy dinners at the local Country Club...
                      Ha. This is not what happened at all. We suck at golf and
                      love eating Guzman Y Gomez.”
                      <br />
                    </p>
                    <p className="timeline_quote-title">
                      Adam, Co-founder of Lumio
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline_item">
              <div id="timelineLeftVerified" className="timeline_left">
                <div className="timeline_date-text">June 2018</div>
              </div>
              <div id="timelineCenterVerified" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="marginBottomMedium">
                  <div className="timeline_text">
                    Dan is shipped off to work with ze Germans as Head of
                    Product at Influencer DB.
                    <br />
                    <br />
                    Adam decides to stay in Sydney and cut his teeth as a
                    Product Designer with one of Sydney&#x27;s leading design
                    studios.
                    <br />
                  </div>
                </div>
                <div className="marginBottomMedium">
                  <p className="text-colour-lightgrey">
                    Whilst in Germany, Dan worked with with brands such as
                    Daniel Wellington and BMW - Ja!
                    <br />
                    <br />
                    Adam worked with clients like Vodafone, TAFE NSW, Adobe and
                    also won the &#x27;Good Design Australia&#x27; award for his
                    work on the Seatfrog website.
                    <br />
                  </p>
                </div>
                <div className="margin-bottom-xlarge">
                  <div className="inline-block">
                    <a
                      href="https://good-design.org/projects/seatfrog-com-responsive-website-redesign/"
                      target="_blank"
                      className="timeline_link w-inline-block"
                    >
                      <div>Read about the Good Design Award</div>
                      <img
                        src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4e982f499b91260e0e91_open_in_new.svg"
                        loading="lazy"
                        alt=""
                        className="link-icon"
                      />
                    </a>
                  </div>
                </div>
                <div className="timeline_image-wrapper">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe27335a43515f1b7a7_Image%205.png"
                    loading="lazy"
                    width="480"
                    sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, 36vw"
                    srcSet="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe27335a43515f1b7a7_Image%205-p-500.png 500w, https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe27335a43515f1b7a7_Image%205.png 960w"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="timeline_item">
              <div id="timelineLeftVerified" className="timeline_left">
                <div className="timeline_date-text">November 2019</div>
              </div>
              <div id="timelineCenterVerified" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="marginBottomMedium">
                  <div className="timeline_text">
                    After spending time apart, Dan and Adam begin to plan their
                    next moves and rekindle their business partnership.
                    <br />
                  </div>
                </div>
                <div className="marginBottomMedium">
                  <p className="text-colour-lightgrey">
                    The name &quot;Relume&quot; is born.
                    <br />
                  </p>
                </div>
                <div className="margin-bottom-xlarge">
                  <div className="timeline_definition-wrapper">
                    <p className="text-colour-white">
                      relume
                      <br />
                    </p>
                    <div className="timeline_badge">
                      <div>verb</div>
                    </div>
                    <p className="text-colour-lightgrey">
                      [ri-loom]
                      <br />
                      <span className="text-colour-white">
                        To relight or rekindle (a light, flame, etc.)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="timeline_image-wrapper">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe236a3d8f3c716b49f_Image%206.png"
                    loading="lazy"
                    width="480"
                    sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, 36vw"
                    srcSet="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe236a3d8f3c716b49f_Image%206-p-500.png 500w, https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe236a3d8f3c716b49f_Image%206.png 960w"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="timeline_item">
              <div id="timelineLeftVerified" className="timeline_left">
                <div className="timeline_date-text">January 2020</div>
              </div>
              <div id="timelineCenterVerified" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="marginBottomMedium">
                  <div className="timeline_text">
                    Dan moves back to Sydney to join a Global startup incubator
                    called Antler. He convinces Adam to join him.
                    <br />
                  </div>
                </div>
                <div className="margin-bottom-xlarge">
                  <div className="inline-block">
                    <a
                      href="https://www.antler.co/"
                      target="_blank"
                      className="timeline_link w-inline-block"
                    >
                      <div>learn more about antler here</div>
                      <img
                        src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4e982f499b91260e0e91_open_in_new.svg"
                        loading="lazy"
                        alt=""
                        className="link-icon"
                      />
                    </a>
                  </div>
                </div>
                <div className="timeline_image-wrapper">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe229fc171a5a90cec1_Image%207.png"
                    loading="lazy"
                    width="480"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="timeline_item">
              <div id="timelineLeftVerified" className="timeline_left">
                <div className="timeline_date-text">April 2020</div>
              </div>
              <div id="timelineCenterVerified" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="timeline_milestone-badge">
                  <div>🚀 relume launches </div>
                </div>
                <div className="marginBottomMedium">
                  <div className="timeline_text">
                    For various reasons, Dan and Adam decide to turn down a
                    $100,000 investment from Antler and start their own business
                    venture, without taking outside investment.
                    <br />
                  </div>
                </div>
                <div className="margin-bottom-xlarge">
                  <p className="text-colour-lightgrey">
                    To do this they would have to build a company that would be
                    profitable in its first year. Not the next Uber of *insert
                    clever idea*.
                    <br />
                  </p>
                </div>
                <div className="timeline_image-wrapper">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe33c218b7075db8daa_Image%208.png"
                    loading="lazy"
                    width="480"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="timeline_item">
              <div id="timelineLeftVerified" className="timeline_left">
                <div className="timeline_date-text">June 2020</div>
              </div>
              <div id="timelineCenterVerified" className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                <div className="margin-bottom-xlarge">
                  <div className="timeline_text">
                    After building 11 websites on Webflow in under 6 weeks as a
                    way to test a number of business ideas, Dan and Adam decide
                    to stick to what they know best and launch Relume - a
                    company that designs and builds beautiful Webflow websites.
                    <br />
                  </div>
                </div>
                <div className="timeline_image-wrapper marginBottomMedium">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de4fe31b526885591abeb7_Image%209.png"
                    loading="lazy"
                    width="480"
                    alt=""
                  />
                </div>
                <div className="timeline_quote-wrapper">
                  <img
                    src="https://assets.website-files.com/60dd72519d9f9f67690ae425/60de52655aae394d43a0ac08_Dan.jpg"
                    loading="lazy"
                    alt=""
                    className="timeline_quote-image"
                  />
                  <div className="timeline_quote-text-wrapper">
                    <p className="timeline_quote">
                      “Relume was an opportunity for us to build a profitable
                      business, not a startup that bleeds cash, whilst doing
                      what we love to do. It also allows us to learn about all
                      types of businesses and the problems they deal with. These
                      are all opportunities that we could potentially solve for
                      in the future. For now, our goal is simple, we want to
                      build a kickass business which means we really want our
                      customers and the Webflow community to succeed too.”
                      <br />
                    </p>
                    <p className="timeline_quote-title">
                      Dan, Co-founder of Relume
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overlay-fade-bottom"></div>
            <div className="overlay-fade-top"></div>
          </div>
        </div>
      </div>
      <div className="section-timeline-cta">
        <div className="container">
          <div className="padding-vertical-xlarge">
            <div className="timeline-main_heading-wrapper">
              <div className="marginBottomMedium">
                <div className="timeline_date-text">Today</div>
              </div>

              <div className="margin-bottom-large">
                <p className="paragraphLarge">
                  You&#x27;ve heard our story, it&#x27;s now time for the world
                  to hear yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
