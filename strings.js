String.prototype.capitalizeWords = function() {
  var words = this.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
  }
  
  return words.join(' ');
}

String.prototype.format = function() {
  var formatted = this;
    for (var arg in arguments) {
      formatted = formatted.replace(/%[sd]/, arguments[arg]);
    }
    return formatted;
};
