<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating ..." fixed>
      <base-spinner> </base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submit">
        <div class="form-control" :class="{ invalid: !email.isValid }">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            v-model.trim="email.val"
            @focusin="clearValidity('email')"
          />
        </div>
        <div class="form-control" :class="{ invalid: !email.isValid }">
          <label for="pass">Password</label>
          <input
            type="password"
            id="pass"
            v-model.trim="pass.val"
            @focusin="clearValidity('pass')"
          />
        </div>
        <base-button>{{ mode === 'login' ? 'Login' : 'Signup' }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode"
          >{{
            mode === 'login'
              ? 'Create Account Instead!'
              : 'I need to Login now!'
          }}
        </base-button>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
      pass: {
        val: '',
        isValid: true,
      },
      isValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonMode() {
      if (this.mode === 'login') {
        return 'signup';
      } else {
        return 'login';
      }
    },
  },
  methods: {
    handleError() {
      this.error = null;
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validate() {
      if (
        this.email.val === '' ||
        !this.email.val.includes('@') ||
        !this.email.val.includes('.')
      ) {
        this.isValid = false;
        this.email.isValid = false;
      }
      if (this.pass.val.length < 8 || this.pass.val === '') {
        this.pass.isValid = false;
        this.isValid = false;
      }
    },
    async submit() {
      this.validate();
      if (!this.isValid) {
        return;
      }
      this.isLoading = true;
      const  actionPayload = {
        email: this.email.val,
        pass: this.pass.val,
      };
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', actionPayload);
        } else {
          await this.$store.dispatch('signup',actionPayload);
        }
        const redUrl = '/' + (this.$route.query.redirect || 'coaches')
        this.$router.replace(redUrl)
      } catch (error) {
        this.error = error.message || 'failed to signup';
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      this.email.val = ''
      this.pass.val = ''
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
