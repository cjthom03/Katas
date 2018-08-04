# 4.1 - Route between nodes
# Given a directed graph, design an algorithm to find
# out whether there is a route between two nodes

class Node
  attr_accessor :edges

  def initialize(value)
    @value = value
    @edges = []
  end
end

class Edge
  attr_reader :fromNode, :toNode
  def initialize(fromNode, toNode)
    @fromNode = fromNode
    @toNode = toNode
    fromNode.edges.push(self)
  end
end

def route?(startNode, endNode)
  visited = Hash.new
  queue = Queue.new
  queue.push(startNode)

  until queue.empty?
    currentNode = queue.pop
    return true if currentNode == endNode

    currentNode.edges.each do |edge|
      child = edge.toNode
      unless visited[child]
        queue.push(child)
        visited[child] = true
      end
    end
  end

  false
end

# test case

# nodeA = Node.new(:A) #Start Node
# nodeB = Node.new(:B) #End Node
# nodeC = Node.new(:C)
# nodeD = Node.new(:D)
# nodeE = Node.new(:E)
# nodeF = Node.new(:F)
# nodeG = Node.new(:G)
#
# Edge.new(nodeA, nodeF)
# Edge.new(nodeF, nodeG)
# Edge.new(nodeG, nodeF)
# Edge.new(nodeA, nodeC)
# Edge.new(nodeC, nodeD)
# Edge.new(nodeD, nodeB)
# Edge.new(nodeB, nodeD)
# Edge.new(nodeB, nodeE)


#======================================================================
#======================================================================

 # # 4.4 Check balanced
 # Implement a function to check if a binary tree is balanced. For the purposes
 # of this question, a balanced tree is defined to be a tree such that the heights
 # of the two subtrees of any node never differ by more than one.

class BTNode
  attr_accessor :value, :left, :right
  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

def balanced?(treeNode)
  return true if treeNode.nil?
  return true if treeNode.left == nil && treeNode.right == nil

  left_size = get_depth(treeNode.left);
  right_size = get_depth(treeNode.right);
  diff = (left_size - right_size).abs
  return false if diff > 1

  return balanced?(treeNode.left) && balanced?(treeNode.right)

end

def get_depth(treeNode)
  return 0 if treeNode.nil?
  return 1 + [get_depth(treeNode.left), get_depth(treeNode.right)].max
end

# a = BTNode.new(:a)
# b = BTNode.new(:b)
# c = BTNode.new(:c)
# d = BTNode.new(:d)
# e = BTNode.new(:e)
# f = BTNode.new(:f)
# g = BTNode.new(:g)
# h = BTNode.new(:h)
# i = BTNode.new(:i)
#
# a.left = b
# a.right = c
# b.right = d
# c.left = e
# c.right = f
# d.left = g
# f.left = h
# f.right = g
#
#
# puts get_depth(a)
# puts get_depth(b)
# puts get_depth(c)
#
# puts balanced?(a)
# puts balanced?(b)
# puts balanced?(c)
 # ======================================================================
 # ======================================================================
