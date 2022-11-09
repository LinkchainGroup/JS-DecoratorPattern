export default class 裝飾器 {
    /**
     * 裝飾器 - 使屬性唯讀
     * @param {*} target
     * @returns 
     */
    static 唯讀 (target) {    
        target.descriptor.writable = false;
        return target;
    }

    /**
     * 裝飾器 - 動態加入方法
     * @param {*} param0 
     * @returns 
     */
    static 動態加入方法 ({name, callback}) {
        return function(target) {
            target.elements.push({
                kind: "method",
                key: name,
                placement: "prototype",
                descriptor: {
                    value: callback,
                    writable: false,
                    configurable: false,
                    enumerable: false
                }
            });
    
            return target;
        }
    }

    static 打折 ({name, callback}) {
        return function(target) {
            let existFuncIdx = target.elements.findIndex(e => e.key == name)
            if (existFuncIdx >= 0) {                
                target.elements[existFuncIdx].descriptor.value = callback
            }
            else{
                target.elements.push({
                    kind: "method",
                    key: name,
                    placement: "prototype",
                    descriptor: {
                        value: callback
                    }
                });
            }
    
            return target;
        }
    }
}