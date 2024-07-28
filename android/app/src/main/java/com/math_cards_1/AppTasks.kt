package com.math_cards_1

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log

class AppTasks(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "AppTasks"
    }

    @ReactMethod
    fun taskOne(name: String) {
        Log.d("СОБЫТИЕ НАЖАТИЕ", "Create event called with name: $name")
    }

    
}
