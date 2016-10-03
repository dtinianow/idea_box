FactoryGirl.define do
  factory :idea do

    factory :alphabet_idea do
      title 'Alphabet'
      body 'a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z '
      created_at Date.today
    end

    factory :backwards_idea do
      title 'Backwards'
      body 'z y x w v u t s r q p o n m l k j i h g f e d c b a z y x w v u t s r q p o n m l k j i h g f e d c b a z y x w v u t s r q p o n m l k j i h g f e d c b a z y x w v u t s r q p o n m l k j i h g f e d c b a '
      quality 'genius'
      created_at Date.yesterday
    end
  end
end
