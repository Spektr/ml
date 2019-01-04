import './styles.css';
import * as tf from '@tensorflow/tfjs';

const values = [];

for (let i = 0; i < 15; i++) {
    values[i] = Math.random() * 1000;
}

const tensor2D = tf.tensor2d(values, [5, 3], 'int32');
tensor2D.print();
console.log(tensor2D.get(1, 2));

const vTensor = tf.variable(tensor2D);
vTensor.data().then((stuff) => {
    console.log('async:');
    console.log(stuff);
});

const tensor2DTranspose = tensor2D.transpose();
tensor2DTranspose.print();

const tensor2D1 = tf.tensor2d(values, [3, 5], 'int32');
tensor2D1.print();

const matMulTensor = tensor2D.matMul(tensor2D1);
matMulTensor.print();

