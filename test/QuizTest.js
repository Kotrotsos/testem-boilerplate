var should = chai.should();

describe("A Quiz", function() {
    it("should have a default score of 0",function(){
        var quiz = new Quiz;
        quiz.score.should.equal(0);
    })
})