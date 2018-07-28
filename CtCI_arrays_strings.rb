# Cracking the coding interview
# Arrays and Strings
# Pages 90-91

# Question 1.2
# Given two strings, write a method to determine if one is a permutation
# of another
# Assume that the are the same length?
# Assume that there are no spaces or that spaces are part of the character count?

def check_permutations(str1, str2)
  return false unless str1.length == str2.length
  letters = Hash.new
  str1.length.times do |idx|
    n = str1[idx]
    m = str2[idx]
    letters[n] ? letters[n][0] += 1 : letters[n] = [1, 0]
    letters[m] ? letters[m][1] += 1 : letters[m] = [0, 1]
  end

  letters.each do |_, (n,m)|
    return false unless n == m
  end

  true
end

# Tests for 1.2

puts "======================================================="
puts "Tests for 1.2 Check Permutations\n"
test1 = check_permutations("string", "string")
test2 = check_permutations("abcba", "cbaba")
test3 = check_permutations("abc ", "ab")

puts (test1 == true ? "Pass" : "FAIL!!")
puts (test2 == true ? "Pass" : "FAIL!!")
puts (test3 == false ? "Pass" : "FAIL!!")
puts "======================================================="






#
