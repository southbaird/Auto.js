function autoJsGlobalScope(){
    function FUNCTION(url){
        var f = function(){};
        f.__url__ = url;
        return f;
    }
    function VARIABLE(url){
        return {
            __url__: url
        }
    }
    var app = {
        "uninstall": FUNCTION("app.html#app_app_uninstall_packagename"),
        "viewFile": FUNCTION("app.html#app_app_viewfile_path"),
        "editFile": FUNCTION("app.html#app_app_editfile_path"),
        "openUrl": FUNCTION("app.html#app_app_openurl_url"),
        "launchPackage": FUNCTION("app.html#app_app_takephoto_path"),
        "launch": FUNCTION("globals.html#globals_launchpackage_packagename"),
        "launchApp": FUNCTION("globals.html#globals_launchapp_appname"),
        "getPackageName": FUNCTION("globals.html#globals_getpackagename_appname"),
        "openAppSetting": FUNCTION("globals.html#globals_getappname_packagename"),
        __url__: "app.html"
    };
     var automator = {
        "click": FUNCTION("widgets-based-automation.html#widgets_based_automation_click_text_i"),
        "longClick": FUNCTION("widgets-based-automation.html#widgets_based_automation_longclick_text_i"),
        "press": FUNCTION(),
        "swipe": FUNCTION(),
        "gesture": FUNCTION(),
        "gestures": FUNCTION(),
        "gestureAsync": FUNCTION(),
        "gesturesAsync": FUNCTION(),
        "scrollDown": FUNCTION("widgets-based-automation.html#widgets_based_automation_scrollup_i"),
        "scrollUp": FUNCTION("widgets-based-automation.html#widgets_based_automation_scrollup_i"),
        "input": FUNCTION("widgets-based-automation.html#widgets_based_automation_input_i_text"),
        "setText": FUNCTION("widgets-based-automation.html#widgets_based_automation_settext_i_text"),
         __url__: "widgets-based-automation.html"
      };
      var console = {
        "show": FUNCTION("console.html#console_console_show"),
        "hide": FUNCTION(),
        "clear": FUNCTION("console.html#console_console_clear"),
        "verbose": FUNCTION("console.html#console_console_verbose_data_args"),
        "info": FUNCTION("console.html#console_console_info_data_args"),
        "log": FUNCTION("console.html#console_console_log_data_args"),
        "warn": FUNCTION("console.html#console_console_warn_data_args"),
        "error": FUNCTION("console.html#console_console_error_data_args"),
        "assert": FUNCTION("console.html#console_console_assert_value_message"),
        __url__: "console.html"
      };
      var dialogs = {
        "select": FUNCTION(),
        "singleChoice": FUNCTION(),
        "multiChoice": FUNCTION(),
        "rawInput": FUNCTION(),
        "input": FUNCTION(),
        "alert": FUNCTION(),
        "confirm": FUNCTION(),
        "prompt": FUNCTION()
      };
      var images = {
        "saveImage": FUNCTION("images.html#images_images_saveimage_image_path"),
        "pixel": FUNCTION("images.html#images_images_pixel_image_x_y"),
        "read": FUNCTION(),
        "requestScreenCapture": FUNCTION("images.html#images_requestscreencapture_width_height"),
        "captureScreen": FUNCTION("images.html#images_capturescreen"),
        "findColor": FUNCTION("images.html#images_images_findcolor_image_color_options"),
        "findColorInRegion": FUNCTION("images.html#images_images_findcolorinregion_img_color_x_y_width_height_threads_algorithm_threshold"),
        "findColorEquals": FUNCTION("images.html#images_images_findcolorequals_img_color_x_y_width_height_threads"),
        __url__: "images.html"
      };
      var colors = {
        "red": FUNCTION("images.html#images_colors_red_color"),
        "green": FUNCTION("images.html#images_colors_green_color"),
        "blue": FUNCTION("images.html#images_colors_blue_color"),
        "alpha": FUNCTION("images.html#images_colors_alpha_color"),
        "toString": FUNCTION("images.html#images_colors_tostring_color"),
        "rgb": FUNCTION("images.html#images_colors_rgb_red_green_blue"),
        "argb": FUNCTION("images.html#images_colors_argb_alpha_red_green_blue"),
        __url__: "images.html#images_colors"
      };
      var events = {
        "emitter": FUNCTION("events.html#events_events_emitter"),
        "observeKey": FUNCTION("events.html#events_events_observekey"),
        "observeTouch": FUNCTION("events.html#events_events_observetouch"),
        "observeNotification": FUNCTION("events.html#events_obversenotification"),
        "onKeyDown": FUNCTION("events.html#events_events_onkeydown_keyname_listener"),
        "onKeyUp": FUNCTION("events.html#events_events_onkeyup_keyname_listener"),
        "onceKeyDown": FUNCTION("events.html#events_events_oncekeydown_keyname_listener"),
        "onceKeyUp": FUNCTION("events.html#events_events_oncekeyup_keyname_listener"),
        "onToast": FUNCTION("events.html#events_toast"),
        "onNotification": FUNCTION("events.html#events_notification"),
        "removeAllKeyDownListeners": FUNCTION("events.html#events_events_removeallkeydownlisteners_keyname"),
        "removeAllKeyUpListeners": FUNCTION("events.html#events_events_removeallkeyuplisteners_keyname"),
        "onTouch": FUNCTION("events.html#events_events_ontouch_listener"),
        "removeAllTouchListeners": FUNCTION("events.html#events_events_removealltouchlisteners"),
        "getTouchEventTimeout": FUNCTION("events.html#events_events_gettoucheventtimeout"),
        "setTouchEventTimeout": FUNCTION("events.html#events_events_settoucheventtimeout_timeout"),
        "on": FUNCTION("events.html#events_eventemitter_on_eventname_listener"),
        "once": FUNCTION("events.html#events_eventemitter_once_eventname_listener"),
        "emit": FUNCTION("events.html#events_eventemitter_emit_eventname_args"),
        "getListeners": FUNCTION(),
        "addListener": FUNCTION("events.html#events_eventemitter_addlistener_eventname_listener"),
        "eventNames": FUNCTION("events.html#events_eventemitter_eventnames"),
        "listenerCount": FUNCTION("events.html#events_eventemitter_listenercount_eventname"),
        "listeners": FUNCTION("events.html#events_eventemitter_listeners_eventname"),
        "prependListener": FUNCTION("events.html#events_eventemitter_prependlistener_eventname_listener"),
        "prependOnceListener": FUNCTION("events.html#events_eventemitter_prependoncelistener_eventname_listener"),
        "removeAllListeners": FUNCTION("events.html#events_eventemitter_removealllisteners_eventname"),
        "removeListener": FUNCTION("events.html#events_eventemitter_removelistener_eventname_listener"),
        "setMaxListeners": FUNCTION("events.html#events_eventemitter_setmaxlisteners_n"),
        "getMaxListeners": FUNCTION("events.html#events_eventemitter_getmaxlisteners"),
        "defaultMaxListeners": FUNCTION("events.html#events_eventemitter_defaultmaxlisteners"),
        __url__: "events.html"
      };
      var files = {
        "open": FUNCTION(),
        "isFile": FUNCTION("files.html#files_files_isfile_path"),
        "isDir": FUNCTION("files.html#files_files_isdir_path"),
        "isEmptyDir": FUNCTION("files.html#files_files_isemptydir_path"),
        "join": FUNCTION("files.html#files_files_join_parent_child"),
        "create": FUNCTION("files.html#files_files_create_path"),
        "createIfNotExists": FUNCTION("files.html#files_files_createifnotexists_path"),
        "exists": FUNCTION("files.html#files_files_exists_path"),
        "ensureDir": FUNCTION("files.html#files_files_ensuredir_path"),
        "read": FUNCTION("files.html#files_files_read_path_encoding_utf_8"),
        "write": FUNCTION("files.html#files_files_write_path_text_encoding_utf_8"),
        "copy": FUNCTION("files.html#files_files_copy_frompath_topath"),
        "move": FUNCTION("files.html#files_files_move_frompath_topath"),
        "rename": FUNCTION("files.html#files_files_rename_path_newname"),
        "renameWithoutExtension": FUNCTION("files.html#files_files_renamewithoutextension_path_newname"),
        "getName": FUNCTION("files.html#files_files_getname_path"),
        "getExtension": FUNCTION("files.html#files_files_getextension_path"),
        "getNameWithoutExtension": FUNCTION("files.html#files_files_getnamewithoutextension_path"),
        "remove": FUNCTION("files.html#files_files_remove_path"),
        "removeDir": FUNCTION("files.html#files_files_removedir_path"),
        "getSdcardPath": FUNCTION("files.html#files_files_getsdcardpath"),
        "listDir": FUNCTION("files.html#files_files_listdir_path_filter"),
        __url__: "files.html"
      };
      var timers = {
        "setTimeout": FUNCTION("timers.html#timers_settimeout_callback_delay_args"),
        "clearTimeout": FUNCTION("timers.html#timers_cleartimeout_id"),
        "setInterval": FUNCTION("timers.html#timers_setinterval_callback_delay_args"),
        "clearInterval": FUNCTION("timers.html#timers_clearinterval_id"),
        "setImmediate": FUNCTION("timers.html#timers_setimmediate_callback_args"),
        "clearImmediate": FUNCTION("timers.html#timers_clearimmediate_id")
      };
      var globals = {
        "app": app,
        "automator": automator,
        "console": console,
        "dialogs": dialogs,
        "events": events,
        "images": images,
        "files": files,
        "timers": timers,
        "ui": {},

        "click": FUNCTION(),
        "longClick": FUNCTION(),
        "press": FUNCTION(),
        "swipe": FUNCTION(),
        "gesture": FUNCTION(),
        "gestures": FUNCTION(),
        "gestureAsync": FUNCTION(),
        "gesturesAsync": FUNCTION(),
        "scrollDown": FUNCTION(),
        "scrollUp": FUNCTION(),
        "input": FUNCTION(),
        "setText": FUNCTION(),

        "print": FUNCTION(),
        "log": FUNCTION(),
        "err": FUNCTION(),
        "openConsole": FUNCTION(),
        "clearConsole": FUNCTION(),

        "rawInput": FUNCTION(),
        "input": FUNCTION(),
        "alert": FUNCTION(),
        "confirm": FUNCTION(),
        "prompt": FUNCTION(),

        "requestScreenCapture": FUNCTION(),
        "captureScreen": FUNCTION(),
        "findColor": FUNCTION(),
        "findColorInRegion": FUNCTION(),
        "findColorEquals": FUNCTION(),

        "open": FUNCTION(),

        "id": FUNCTION(),
        "idContains": FUNCTION(),
        "idStartsWith": FUNCTION(),
        "idEndsWith": FUNCTION(),
        "idMatches": FUNCTION(),
        "text": FUNCTION(),
        "textContains": FUNCTION(),
        "textStartsWith": FUNCTION(),
        "textEndsWith": FUNCTION(),
        "textMatches": FUNCTION(),
        "desc": FUNCTION(),
        "descContains": FUNCTION(),
        "descStartsWith": FUNCTION(),
        "descEndsWith": FUNCTION(),
        "descMatches": FUNCTION(),
        "className": FUNCTION(),
        "classNameContains": FUNCTION(),
        "classNameStartsWith": FUNCTION(),
        "classNameEndsWith": FUNCTION(),
        "classNameMatches": FUNCTION(),
        "packageName": FUNCTION(),
        "packageNameContains": FUNCTION(),
        "packageNameStartsWith": FUNCTION(),
        "packageNameEndsWith": FUNCTION(),
        "packageNameMatches": FUNCTION(),
        "bounds": FUNCTION(),
        "boundsInside": FUNCTION(),
        "boundsContains": FUNCTION(),
        "drawingOrder": FUNCTION(),
        "checkable": FUNCTION(),
        "checked": FUNCTION(),
        "focusable": FUNCTION(),
        "focused": FUNCTION(),
        "visibleToUser": FUNCTION(),
        "accessibilityFocused": FUNCTION(),
        "selected": FUNCTION(),
        "clickable": FUNCTION(),
        "longClickable": FUNCTION(),
        "enabled": FUNCTION(),
        "password": FUNCTION(),
        "scrollable": FUNCTION(),
        "editable": FUNCTION(),
        "contentInvalid": FUNCTION(),
        "contextClickable": FUNCTION(),
        "multiLine": FUNCTION(),
        "dismissable": FUNCTION(),
        "checkable": FUNCTION(),
        "checked": FUNCTION(),
        "focusable": FUNCTION(),
        "focused": FUNCTION(),
        "visibleToUser": FUNCTION(),
        "accessibilityFocused": FUNCTION(),
        "selected": FUNCTION(),
        "clickable": FUNCTION(),
        "longClickable": FUNCTION(),
        "enabled": FUNCTION(),
        "password": FUNCTION(),
        "scrollable": FUNCTION(),
        "editable": FUNCTION(),
        "contentInvalid": FUNCTION(),
        "contextClickable": FUNCTION(),
        "multiLine": FUNCTION(),
        "dismissable": FUNCTION(),

        "SetScreenMetrics": FUNCTION(),
        "Tap": FUNCTION(),
        "Swipe": FUNCTION(),
        "Screencap": FUNCTION(),
        "KeyCode": FUNCTION(),
        "Home": FUNCTION(),
        "Back": FUNCTION(),
        "Power": FUNCTION(),
        "Up": FUNCTION(),
        "Down": FUNCTION(),
        "Left": FUNCTION(),
        "Right": FUNCTION(),
        "OK": FUNCTION(),
        "VolumeUp": FUNCTION(),
        "VolumeDown": FUNCTION(),
        "Menu": FUNCTION(),
        "Camera": FUNCTION(),
        "Text": FUNCTION(),

        "loop": FUNCTION(),
        "setTimeout": FUNCTION(),
        "clearTimeout": FUNCTION(),
        "setInterval": FUNCTION(),
        "clearInterval": FUNCTION(),
        "setImmediate": FUNCTION(),
        "clearImmediate": FUNCTION(),

        "newInjectableWebClient": FUNCTION(),
        "newInjectableWebView": FUNCTION(),

        "toast": FUNCTION(),
        "toastLog": FUNCTION(),
        "sleep": FUNCTION(),
        "isStopped": FUNCTION(),
        "notStopped": FUNCTION(),
        "exit": FUNCTION(),
        "setClip": FUNCTION(),
        "getClip": FUNCTION(),
        "currentPackage": FUNCTION(),
        "currentActivity": FUNCTION(),
        "waitForActivity": FUNCTION(),
        "waitForPackage": FUNCTION(),
        "setScreenMetrics": FUNCTION(),

        "context": {},
        "activity": {}
    };
     return globals;
  }

