# Cracking the coding interview
# Arrays and Strings
# Pages 90-91

# Question 1.2
# Given two strings, write a method to determine if one is a permutation
# of another
# Assume that the are the same length?
# Assume that there are no spaces or that spaces are part of the character count?

def check_permutations(str1, str2)
  letters = Hash.new
  str1.each_char do |n|
    if letters[n]
      letters[n].first += 1
    else
      letters[n] = [1,0]
    end
  end

  str2.each_char do |m|
    if letters[m]
      letters[m].last += 1
    else
      return false
    end
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
test2 = check_permutations("abc", "cba")
test3 = check_permutations("abc ", "abb ")

puts (test1 == true ? "Pass" : "FAIL!!")
puts (test2 == true ? "Pass" : "FAIL!!")
puts (test3 == false ? "Pass" : "FAIL!!")
puts "======================================================="






#
