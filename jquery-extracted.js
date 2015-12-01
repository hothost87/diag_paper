Query.extendBasic = function extendBasic(target, source) {
    var name;
    target = target || {};
    for (name in source) {
        (function _forin_body_22(name) { target[name] = source[name]; })(name);
    }
    
    return target;
}