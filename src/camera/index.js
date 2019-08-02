const { dot, cross, sqrt, pow, matrix } = require('mathjs')

class Camera {
  constructor(eye, look, up) {
    this.eye = eye || [0.0, 0.0, 0.0]
    this.u = [0.0, 0.0, 0.0]
    this.v = [0.0, 0.0, 0.0]
    this.n = [0.0, 0.0, 0.0]

    look = look || [0.0, 0.0, 0.0]
    up = up || [0.0, 1.0, 0.0]

    this.set(this.eye, look, up)
  }

  normalize = (vec) => {
    const length = sqrt(pow(vec[0], 2) + pow(vec[1], 2) + pow(vec[2], 2))

    if (length === 0) {
      return vec
    }

    return [ vec[0] / length, vec[1] / length, vec[2] / length ]
  }

  generateModelView = () => ([
    [this.u[0],   this.u[1],    this.u[2],    -dot(this.eye, this.u)],
    [this.v[0],   this.v[1],    this.v[2],    -dot(this.eye, this.v)],
    [this.n[0],   this.n[1],    this.n[2],    -dot(this.eye, this.n)],
    [0,           0,            0,            1.0],
  ])

  set = (e, look, up) => {
    this.eye = [ ...e ]
    this.n = [ this.eye[0] - look[0], this.eye[1] - look[1], this.eye[2] - look[2] ]

    // vectors must be unit length before computing cross product
    this.n = this.normalize(this.n)
    this.u = this.normalize(this.u)

    this.u = cross(up, this.n) // make u = up x n
    this.v = cross(this.n, this.u) // make v = n x u

    this.modelview = this.generateModelView()
  }

  // TRANSFORMATIONS
  slide = () => {}
  yaw = () => {}
  pitch = () => {}
  roll = () => {}
}

module.exports = Camera
