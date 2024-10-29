import { useEffect } from "react";

export const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="pageSection">
        <p>Sunshine Coffee Cookie Policy</p>
        <p>
          Last updated:{" "}
          {new Date().toLocaleDateString("da-DK", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>
          Welcome to Sunshine Coffee! This Cookie Policy explains how we use
          cookies on our website to enhance your experience and provide relevant
          information. By continuing to browse our website, you consent to our
          use of cookies in accordance with this policy.
        </p>

        <p>Contact Information</p>
        <p>Sunshine Coffee</p>
        <p>Supercoffeeroad 223b</p>
        <p>92230 New Coffeland</p>
        <p>Phone: 22331122</p>
        <p>Email: coffeeland@info.com</p>

        <p>1. What Are Cookies?</p>
        <p>
          Cookies are small text files placed on your device (computer, tablet,
          or smartphone) when you visit a website. They help improve your
          browsing experience by remembering your preferences and enabling
          website features.
        </p>

        <p>2. How We Use Cookies</p>
        <p>We use cookies to:</p>

        <p>Improve website functionality and performance.</p>
        <p>
          Understand how visitors interact with our website to improve user
          experience.
        </p>
        <p>Deliver content relevant to you, including promotions and offers.</p>
        <p>3. Types of Cookies We Use</p>
        <p>Essential Cookies</p>
        <p>
          These cookies are necessary for the basic functioning of our website,
          enabling you to navigate and use its features.
        </p>

        <p>Analytics Cookies</p>
        <p>
          We use these cookies to track visitor statistics, helping us improve
          website functionality and content.
        </p>

        <p>Marketing Cookies</p>
        <p>
          With your permission, these cookies are used to tailor marketing
          messages to your interests, both on and off our website.
        </p>

        <p>4. How to Manage Your Cookie Preferences</p>
        <p>
          You can control and manage cookies through your browser settings. Most
          browsers allow you to block or delete cookies; however, doing so may
          affect your experience on our website.
        </p>

        <p>5. Updates to Our Cookie Policy</p>
        <p>
          We may update this Cookie Policy periodically to reflect changes in
          our practices or for other operational, legal, or regulatory reasons.
          Please revisit this page for the latest information on our cookie
          practices.
        </p>
      </section>
    </>
  );
};
