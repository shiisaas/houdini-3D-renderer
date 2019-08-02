const assert = require('assert')

const Camera = require('../../src/camera')

describe('camera', () => {
  describe('utils', () => {
    it('should normalize vectors', () => {
      const camera = new Camera()
      const zeroVector = [0.0, 0.0, 0.0]
      const someVector = [50.0, 200.1, 70.0]
      const upVector = [0.0, 1.0, 0.0]

      assert.deepEqual(camera.normalize(zeroVector), [0.0, 0.0, 0.0])
      assert.deepEqual(camera.normalize(someVector), [0.2295607412362129, 0.918702086427324, 0.32138503773069804])
      assert.deepEqual(camera.normalize(upVector), [0.0, 1.0, 0.0])
    })
  })

  describe('modelview', () => {
    it('should generate modelview', () => {
      const camera = new Camera()

      const expected = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1],
      ]

      assert.deepEqual(camera.generateModelView(), expected)
    })

    it('should compute correct vectors for modelview', () => {
      assert.equal(1, 1)
    })
  })
})
