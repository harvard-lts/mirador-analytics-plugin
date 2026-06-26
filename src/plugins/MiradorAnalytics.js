import { useEffect } from 'react';
import PropTypes from "prop-types";
import $ from "jquery";

const mapStateToProps = (state, { windowId }) => ({
  containerId: state.config.miradorAnalyticsPlugin?.containerId,
});

function MiradorAnalytics({ containerId }) {
  useEffect(() => {
    $("head").prepend(
      "<!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','"+containerId+"');</script><!-- End Google Tag Manager -->"
    );
    $("body").prepend(
      '<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id='+containerId+'"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->'
    );
  }, [containerId]);

  return null;
}

MiradorAnalytics.propTypes = {
  containerId: PropTypes.string,
};

export default {
  name: 'MiradorAnalyticsPlugin',
  target: 'Window',
  mode: 'add',
  component: MiradorAnalytics,
  mapStateToProps,
};
