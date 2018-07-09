# Given a 32-bit signed integer, reverse digits of an integer.
#
# Example 1: Input: 123 / Output: 321
# Example 2: Input: -123 / Output: -321
# Example 3: Input: 120 / Output: 21
#
# Assume we are dealing with an environment which could only store integers
# within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose
# of this problem, assume that your function returns 0 when the reversed
# integer overflows.

def reverse(x)
    sign = x < 0 ? -1 : 1
    nums = x.abs.to_s.split("")
    nums.map!.with_index {|num, id| (num.to_i) * (10**id) }
    result = nums.reduce(:+)
    result > 2**31 ? 0 : (result * sign)
end
