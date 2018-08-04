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

nodeA = Node.new(:A) #Start Node
nodeB = Node.new(:B) #End Node
nodeC = Node.new(:C)
nodeD = Node.new(:D)
nodeE = Node.new(:E)
nodeF = Node.new(:F)
nodeG = Node.new(:G)

Edge.new(nodeA, nodeF)
Edge.new(nodeF, nodeG)
Edge.new(nodeG, nodeF)
Edge.new(nodeA, nodeC)
Edge.new(nodeC, nodeD)
Edge.new(nodeD, nodeB)
Edge.new(nodeB, nodeD)
Edge.new(nodeB, nodeE)


#======================================================================
#======================================================================

 # 4.3 List of Depths
 # Given a binary tree, design an algorithm which creates a linked list of all
 # the nodes at each depth (e.g. if you have a tree with depth D, you'll have
 # D linked lists)

 


 # ======================================================================
 # ======================================================================
