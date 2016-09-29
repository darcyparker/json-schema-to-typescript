export var schema = {
  "title": "AllOf",
  "type": "object",
  "properties": {
    "fooAndBar": {
      "type": "object",
      "allOf": [
        {"$ref": "#/definitions/foo"},
        {"$ref": "#/definitions/bar"}
      ]
    },
    "foo": {
      "type": "object",
      "allOf": [
        {"$ref": "#/definitions/foo"}
      ]
    }
  },
  "allOf": [{
    "title": "AnotherAllOf",
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "more": {
        "type": "object",
        "allOf": [
          {"$ref": "#/definitions/bar"}
        ]
      }
    }
  }],
  "definitions": {
    "foo": {
      "properties": {
        "a": { "type": "string" },
        "b": { "type": "integer" }
      },
      "additionalProperties": false,
      "required": ["a", "b"]
    },
    "bar": {
      "properties": {
        "a": { "type": "string" }
      },
      "additionalProperties": false,
      "required": ["a", "b"]
    }
  },
  "required": ["fooAndBar", "foo", "more"],
  "additionalProperties": false
}

export var types = `export interface Foo {
  a: string;
  b: number;
}
export interface Bar {
  a: string;
}
export interface AllOf {
  fooAndBar: Foo & Bar;
  foo: Foo;
  more: Bar;
}`
