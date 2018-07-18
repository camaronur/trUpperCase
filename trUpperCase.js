String.prototype.trUpperCase = function () {
    var Text = this;
    Text = Text.replace(new RegExp('ğ', 'g'), 'Ğ');
    Text = Text.replace(new RegExp('ü', 'g'), 'Ü');
    Text = Text.replace(new RegExp('ş', 'g'), 'Ş');
    Text = Text.replace(new RegExp('i', 'g'), 'İ');
    Text = Text.replace(new RegExp('ö', 'g'), 'Ö');
    Text = Text.replace(new RegExp('ç', 'g'), 'Ç');
    Text = Text.replace(new RegExp('ı', 'g'), 'I');
    Text = Text.toUpperCase();
    return Text;
};
