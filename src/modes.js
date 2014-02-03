/*global define*/
define("modes", function () {
  // Not strict mode because it uses octal literals all over.
  return {
    isBlob: function (mode) {
      return (mode & 0140000) === 0100000;
    },
    isFile: function (mode) {
      return (mode & 0160000) === 0100000;
    },
    isExecutable: function (mode) {
      return (mode & 1);
    },
    isTree: function (mode) {
      return mode === 040000;
    },
    isSymLink: function (mode) {
      return mode === 0120000;
    },
    isCommit: function (mode) {
      return mode === 0160000;
    },
    toType: function (mode) {
      if (mode === 0160000) return "commit";
      if (mode ===  040000) return "tree";
      if ((mode & 0140000) === 0100000) return "blob";
      return "unknown";
    },
    tree:    040000,
    blob:   0100644,
    file:   0100644,
    exec:   0100755,
    sym:    0120000,
    commit: 0160000
  };
});