//jshint esversion: 6


var expect = require('chai').expect;
var baseem = require('../index');

describe('#numFormatter', function() {
    it('should append smile to end of string', function() {
        var result = baseem("Hello");
        expect(result).to.equal('Hello :)');
    });
    it('should append smile to end of ipsum string', function() {
        var string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        var result = baseem(string);
        expect(result).to.equal("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. :)");
    });
    it('should append smile to both strings', function() {
        var result = baseem("Hello" +" " + "Hello");
        expect(result).to.equal('Hello Hello :)');
    });
    it('should append smile to end of each word', function() {
        var result = baseem("Hello");
        var resultTwo = baseem("World");
        var final = result + " " + resultTwo;
        expect(final).to.equal('Hello :) World :)');
    });


});