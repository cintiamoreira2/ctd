function typeOf(obj) {
    if ( typeof(obj) == "object" ){
      if (obj.length)
        return "array";
      else
        return "object";
      } else
    return typeof(obj);
  }