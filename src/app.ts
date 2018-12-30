import './styles.css';
import * as tf from '@tensorflow/tfjs';

const values = [];

for (let i = 0; i < 30; i++) {
    values[i] = Math.round(Math.random() * 1000);
}

const shape = [2, 5, 3];

const data = tf.tensor(values, shape);
data.print();
