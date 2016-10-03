module ApplicationHelper
  def truncate(body)
    body.split[0...100].join(' ')
  end
end
