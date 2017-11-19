var classType = {};

var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");

for(var i=0; i<types.length; i++) {
  classType["[Object " + types[i] + "]"] = types[i].toLowerCase();
}

export default function type(obj) {
  if (obj == null) {
      return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function" ?
      classType[Object.prototype.toString.call(obj)] || "object" :
      typeof obj;
}