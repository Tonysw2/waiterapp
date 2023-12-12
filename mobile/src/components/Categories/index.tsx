import { useState } from 'react'
import { FlatList } from 'react-native'
import { Text } from '../Text'
import { Category, Icon } from './styles'
import { CategoryType } from '../../@types/CategoryType'

type Props = {
  categories: CategoryType[]
  onSelectCategory: (categoryId: string) => Promise<void>
}

export function Categories({ categories, onSelectCategory }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId

    setSelectedCategory(category)
    onSelectCategory(category)
  }

  return (
    <FlatList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category._id}
      contentContainerStyle={{
        paddingHorizontal: 24,
        gap: 24,
      }}
      renderItem={({ item: category }) => {
        const isSelected = category._id === selectedCategory

        return (
          <Category
            key={category._id}
            onPress={() => {
              handleSelectCategory(category._id)
            }}
          >
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Category>
        )
      }}
    />
  )
}
