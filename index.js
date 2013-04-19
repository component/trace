
/**
 * Module dependencies.
 */

var noop = function(){};

/**
 * Cycles collected.
 */

var cycles = [];

/**
 * Expose `Cycle`.
 */

exports = module.exports = Cycle;

/**
 * Return collected cycles and reset.
 *
 * @return {Array}
 * @api public
 */

exports.flush = function(){
  var flushed = cycles;
  cycles = [];
  return flushed;
};

/**
 * Initialize a new Cycle with the given `id` and `name`.
 *
 * @param {String} name
 * @param {String|Number} id
 * @api public
 */

function Cycle(name, id) {
  if (!(this instanceof Cycle)) return new Cycle(name, id);
  if ('string' != typeof name) throw new TypeError('cycle name required');
  if (null == id) throw new TypeError('id required');
  this.name = name;
  this.id = id;
}

/**
 * Trace start of `type` with `date`.
 *
 * @param {String} type
 * @param {Number|Date} [date]
 * @api public
 */

Cycle.prototype.start = function(type, date){
  cycles.push({
    id: this.id,
    cycle: this.name,
    type: type,
    start: +(date || new Date)
  });
};

/**
 * Trace end of `type` with `date`.
 *
 * @param {String} type
 * @param {Number|Date} [date]
 * @api public
 */

Cycle.prototype.end = function(type, date){
  cycles.push({
    id: this.id,
    cycle: this.name,
    type: type,
    end: +(date || new Date)
  });
};
