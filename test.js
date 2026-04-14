const add = require('./app');

let passed = 0;
let failed = 0;

function assert(description, actual, expected) {
  if (actual === expected) {
    console.log(`  ✓ ${description}`);
    passed++;
  } else {
    console.error(`  ✗ ${description} — expected ${expected}, got ${actual}`);
    failed++;
  }
}

console.log('Running tests for add()...');
assert('adds two positive numbers', add(2, 3), 5);
assert('adds a positive and a negative number', add(10, -3), 7);
assert('adds two zeros', add(0, 0), 0);
assert('adds negative numbers', add(-4, -6), -10);
assert('adds floating point numbers', add(1.5, 2.5), 4);

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
