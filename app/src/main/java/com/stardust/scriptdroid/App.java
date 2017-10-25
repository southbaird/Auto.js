package com.stardust.scriptdroid;

import android.support.multidex.MultiDexApplication;

import com.flurry.android.FlurryAgent;
import com.squareup.leakcanary.LeakCanary;
import com.stardust.scriptdroid.autojs.AutoJs;
import com.stardust.scriptdroid.autojs.key.GlobalKeyObserver;
import com.stardust.scriptdroid.autojs.record.GlobalRecorder;
import com.stardust.scriptdroid.tool.CrashHandler;
import com.stardust.scriptdroid.tool.JsBeautifierFactory;
import com.stardust.scriptdroid.ui.error.ErrorReportActivity;
import com.stardust.theme.ThemeColor;
import com.stardust.theme.ThemeColorManager;
import com.stardust.util.UiHandler;

import java.lang.ref.WeakReference;

/**
 * Created by Stardust on 2017/1/27.
 */

public class App extends MultiDexApplication {

    private static final String TAG = "App";

    private static WeakReference<App> instance;
    private UiHandler mUiHandler;

    public static App getApp() {
        return instance.get();
    }

    public void onCreate() {
        super.onCreate();
        instance = new WeakReference<>(this);
        mUiHandler = new UiHandler(this);
        setUpStaticsTool();
        setUpDebugEnvironment();
        init();
    }

    private void setUpStaticsTool() {
        new FlurryAgent.Builder()
                .withLogEnabled(BuildConfig.DEBUG)
                .build(this, "D42MH48ZN4PJC5TKNYZD");
    }


    private void setUpDebugEnvironment() {
        if (LeakCanary.isInAnalyzerProcess(this)) {
            return;
        }
        LeakCanary.install(this);
        if (!BuildConfig.DEBUG)
            Thread.setDefaultUncaughtExceptionHandler(new CrashHandler(ErrorReportActivity.class));
    }

    private void init() {
        ThemeColorManager.setDefaultThemeColor(new ThemeColor(getResources().getColor(R.color.colorPrimary), getResources().getColor(R.color.colorPrimaryDark), getResources().getColor(R.color.colorAccent)));
        ThemeColorManager.init(this);
        AutoJs.initInstance(this);
        JsBeautifierFactory.initJsBeautify(this, "js/jsbeautify.js");
        GlobalKeyObserver.getSingleton();
        GlobalRecorder.initSingleton(this);
    }



    public UiHandler getUiHandler() {
        return mUiHandler;
    }
}
