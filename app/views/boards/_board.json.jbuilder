json.extract! board, :id, :name, :email, :grid, :created_at, :updated_at
json.url board_url(board, format: :json)
