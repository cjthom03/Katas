# Given a positive integer N, how many ways can we write it as a sum of consecutive positive integers?
#
# Example 1:
# Input: 5
# Output: 2
# Explanation: 5 = 5 = 2 + 3

# Example 2:
# Input: 9
# Output: 3
# Explanation: 9 = 9 = 4 + 5 = 2 + 3 + 4

# Example 3:
# Input: 15
# Output: 4
# Explanation: 15 = 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5

# Note: 1 <= N <= 10 ^ 9.


def consecutive_numbers_sum(n)
  return 0 if n <= 0
  return 1 if n == 1
  num_of_ways = 1
  half = (n / 2.0).ceil
  zeroed_out = false

  half.downto(1).each do |start|
    sum = 0
    until(start == 0 || sum > n)
      sum += start
      num_of_ways += 1 if sum == n
      start -= 1
      zeroed_out = true if start == 0
    end
    break if zeroed_out
  end
  return num_of_ways
end



# // ===================================================================
# // ===================================================================
