module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.count()}
o) 平均值 = ${sequence.average()}`);

};

class Sequence {
  constructor(input) {
  	this.input = input; 
  }

  minimum() {
    return Math.min.apply(null,this.input);
  }

  maximum() {
    return Math.max.apply(null,this.input);
  }

   count() {
    return this.input.length;
  }

    average() {
    	var total = 0; 
    	for (var i = this.input.length - 1; i >= 0; i--) {
    		total += this.input[i];
    	}
    	return (total/ this.count()).toFixed(2);

}
};


