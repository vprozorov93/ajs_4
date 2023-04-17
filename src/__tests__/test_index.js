import healthStatus from '../index'

test.each([
    ['healthy', {name: 'Маг', health: 90}],
    ['wounded', {name: 'Маг', health: 50}],
    ['wounded', {name: 'Маг', health: 40}],
    ['wounded', {name: 'Маг', health: 15}],
    ['critical', {name: 'Маг', health: 13}]
])(
    'test %s healthStatus for %o',
    (expected, object) => {
        const result = healthStatus(object)
        console.log(result)
        expect(result).toBe(expected)
    }
)
