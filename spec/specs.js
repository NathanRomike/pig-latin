describe('startsWithVowel', function() {
  it('determines if word starts with a vowel', function() {
    expect(startsWithVowel('Apple')).to.equal(true)
    expect(startsWithVowel('Banana')).to.equal(false)
  });
});

describe('startsWithQU', function() {
  it('determines if word starts with a Qu', function() {
    expect(startsWithQU('Quilt')).to.equal(true)
    expect(startsWithQU('Banana')).to.equal(false)
  });
});

describe('pigLatin', function() {
  it('translate a word to Pig Latin', function() {
    expect(pigLatin('Banana')).to.equal('ananabay')
    expect(pigLatin('Quilt')).to.equal('iltquay')
  });
});
