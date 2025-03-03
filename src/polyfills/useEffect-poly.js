import React, { useRef } from 'react'

const useEffectPoly = () => {
    Function.prototype.myUseEffect = function (cb, dep) {
        const ref = useRef(null);

        if (!ref.current) {
            ref.current = dep;
            return cb();
        }
        if (ref.current !== dep) {
            return cb();
        }
        if (ref.current.length !== dep.length) {
            return cb();
        }


    }
}

export default useEffectPoly


useEffect(() => {

}, [])