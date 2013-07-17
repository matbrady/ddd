(function() {
  'use strict';

  /**
   * RequireJS Configuration
   *
   * Contains configuration controls for both development 
   * and production 
   */

  // Sets Global NoCache 
  var REQUIRE_NOCACHE = window.REQUIRE_NOCACHE || false;

  // Name libraries / plugins
  var config = {

    /** 
     * DEVELOPMENT 
     *
     * The below lines should be commented before pushing to production
     * - enforceDefine : causes error when modules are loaded that don't
     *     use a define method. ie non AMD compliant libraries 
     * - waitSeconds : Timeout for loading scripts
     */ 
    enforceDefine: true,

    waitSeconds: 200,
    
    /** 
     * PRODUCTION 
     */ 
    urlArgs: !!REQUIRE_NOCACHE ? "bust="+(new Date()).getTime() : '',

    paths: {
      "poly": "polyfills",
      "d3": "lib/d3.v3.min",
      "jquery": "lib/jquery"
    }

  };

  // Predefine Require setup, or configure existing library:
  if (typeof require == 'undefined') {
    require = config;
  } 
  else if (typeof requirejs == 'function') {
    requirejs.config(config);
  }

  /* End RequireJS Configuration */



  /**
   * Application Setup and Bootstrap
   *
   * @require
   *   detection : non-jquery id/class detection
   */
  define(['poly/detection'], function( detection ) {

    function setup() {
        var mods = [];
        
        if (!window.JSON) {      // << test for native JSON support.
            mods.push('poly/json3');  // << fill in with shim if missing.
        }
        
        require(mods, bootstrap);
    };

    function bootstrap() {
        var mods = [];

        if ( detection.has('#main') ) {
            console.log("We've go a MAIN div");
            mods.push('charts/bar');
        }

        require(mods);
    }

    setup();


  });
  
}());