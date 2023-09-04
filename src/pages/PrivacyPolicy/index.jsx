import React from 'react';
import imageRegnum from '../../assets/img/logo.png';
import imageDivider from '../../assets/img/news/ornament2.png';
import './styles.css';

const PrivacyPolicy = () => {
  return (
    <div className="page-content-full download-page">
      <div className="page-content-header">
        <div className="logo">
          <img src={imageRegnum} alt="Regnum"></img>
        </div>
        <h1>Privacy Policy</h1>
        <div className="divider">
          <img src={imageDivider} alt=""></img>
        </div>
      </div>

      <div className="page-content">
        <div className="page-content-title">Privacy Policy</div>
        <div className="info-text">
          {/* prettier-ignore-start */}
          <h1>Privacy Policy</h1>
          <p>
          This privacy policy has been compiled to better serve those who are concerned with how their 'personally identifiable information' (pii) is being used online. pii, as used in us privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your personally identifiable information in accordance with our website.
          </p>

          <h1>What personal information do we collect from the people that visit website?</h1>
          <p>
          When registering on our site, as appropriate, you will be asked to enter your email address or other details to aid in identifying your account.
          </p>

          <h1>When do we collect information?</h1>
          <p>
          We collect information from you when you register on our site or enter information on our site.
          </p>

          <h1>How do we use your information?</h1>
          <p>
          We may use the information we collect from you when you register, surf the website, or use certain other site features in the following ways:
          to allow us to better service you regarding features or in responding to your support requests.
          to send periodic emails regarding your account or other services.
          </p>

          <h1>How do we protect visitor information?</h1>
          <p>
          Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible. information stored on the website is encrypted using various algorithms.

          Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. in addition, all sensitive information you supply is encrypted via secure socket layer (ssl) technology.

          We implement a variety of security measures when a user registers an account, submits, or accesses their information, uses features to maintain the safety of your personal information.

          All transactions are processed through a gateway provider and are not stored or processed on our servers.
          </p>

          <h1>Do we use 'cookies'?</h1>
          <p>
          Yes. cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. for instance, we use cookies to help us automatically remember you for your next visit. they are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. we also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.

          We use cookies to:
          understand and save user's preferences for future visits.
          You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. you do this through your browser (like internet explorer) settings. each browser is a little different, so look at your browser's help menu to learn the correct way to modify your cookies.
          </p>

          <h1>If users disable cookies in their browser:</h1>
          <p>
          If you disable cookies, some features will be disabled. it will turn off some of the features that make your site experience more efficient and some of our services will not function properly.
          </p>

          <h1>Third-Party Disclosure</h1>
          <p>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
          </p>

          <h1>Third-Party Links</h1>
          <p>
          We do not include or offer third party products or services on our website.
          </p>
          <h1>Users will be notified of any privacy policy changes:</h1>
          <p>
          on our privacy policy page.
          </p>

          <h1>Users are able to review change their personal information:</h1>
          <p>
          by logging in to their account.
          by contacting us directly via one of our contact methods below.
          Users are able to request the removal of their information:
          by sending us an email.
          by sending us a support ticket.
          </p>

          <h1>How does our site handle do not track signals?</h1>
          <p>
          We honor do not track signals and do not track, plant cookies, or use advertising when a do not track (dnt) browser mechanism is in place. does our site allow third party behavioral tracking?

          We do not allow third-party behaviour tracking.
          </p>
          {/* prettier-ignore-end */}
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default PrivacyPolicy;
