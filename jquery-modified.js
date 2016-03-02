function extendBasic(target, source) {
    var name;
    target = target || {};
    for (name in source) {
        target[name] = source[name];
    }
    return target;
}