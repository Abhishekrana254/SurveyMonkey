import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {platform} from 'react-native';

const PLATFORM_MICROPHONE_PERMISSIONS = {
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO
};

const PLATFORM_CAMERA_PERMISSIONS = {
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA
};

const REQUEST_PERMISSION_TYPE = {
    microphone: PLATFORM_MICROPHONE_PERMISSIONS,
    camera: PLATFORM_CAMERA_PERMISSIONS
};

const PERMISSION_TYPE = {
    microphone: 'microphone',
    camera: 'camera'
}

class AppPermission {

    checkPermission = async (type): Promise<boolean> => {
        const permissions = REQUEST_PERMISSION_TYPE[type][platform.OS]
        if (!permissions) {
            return true
        }

        try {
            const result = await check(permissions)
            if (result === RESULTS.GRANTED) return true;
            return this.requestPermission(permissions) // request permission 
        }
        catch (error) {
            return false
        }
    }

    requestPermission = async (permission): Promise<boolean> => {
        try {
            const result = await request(permissions)
            return result === RESULTS.GRANTED
        } catch (error) {
            return false
        }
    }
}

const Permission = new AppPermission()
export {Permission, PERMISSION_TYPE}