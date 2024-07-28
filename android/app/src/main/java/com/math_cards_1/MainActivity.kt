package com.math_cards_1

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.content.Intent
import android.os.Bundle
import android.util.Log
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.bridge.ReactApplicationContext

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "math_cards_1"
  override fun onStart() {
    super.onStart()
    Log.d("СОБЫТИЕ onStart", "Старт приложения")
  }
  override fun onResume() {
    super.onResume()
    Log.d("СОБЫТИЕ onResume", "Фокус приложения")
    getReactNativeHost()?.getReactInstanceManager()?.getCurrentReactContext()?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)?.emit("OnResume", "ff")        
  }
  override fun onPause() {
    super.onPause()
    Log.d("СОБЫТИЕ onPause", "Пауза приложения")
  }
  
  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
