import { ref, type Ref } from 'vue';
import { User, ERoles } from '~/models/user/user';

export const users: Ref<User[]> = ref([
  new User(
    '1',
    'John',
    'Doe',
    'john.doe@example.com',
    'password123',
    ERoles.client
  ),
  new User(
    '2',
    'Jane',
    'Smith',
    'jane.smith@example.com',
    'qwerty456',
    ERoles.seller
  ),
  new User(
    '3',
    'Admin',
    'User',
    'admin@example.com',
    'admin123',
    ERoles.admin,
  ),
  new User(
    '4',
    'Bob',
    'Johnson',
    'bob.johnson@example.com',
    'password456',
    ERoles.client
  ),
  new User(
    '5',
    'Alice',
    'Williams',
    'alice.williams@example.com',
    'qwerty789',
    ERoles.seller
  ),
]);